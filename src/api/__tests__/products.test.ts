/* eslint-disable no-underscore-dangle */
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import supertest from 'supertest';

import config from '../../config';
import { signJwt } from '../../helpers/jwt';
import server from '../../helpers/server';
import { createProduct } from '../products/products.service';

const app = server();

export const productPayload = {
  code: config.TEST_CODE,
  name: config.TEST_NAME,
  description: config.TEST_DESCRIPTION,
  image: config.TEST_IMAGE,
  price: config.TEST_PRICE,
  stock: config.TEST_STOCK,
};

export const userPayload = {
  _id: config.TEST_ID,
  email: config.TEST_EMAIL,
  role: config.TEST_ROLE,
  username: config.TEST_USERNAME,
  createdAt: '2022-12-06T23:29:58.186Z',
  updatedAt: '2022-12-06T23:29:58.186Z',
  __v: 0,
};

describe('product', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();

    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('get product route', () => {
    describe('given the product does not exist', () => {
      it('should return a 404', async () => {
        const productId = '638a3a02df496d268d2ecdac';

        await supertest(app).get(`/api/v1/products/${productId}`).expect(404);
      });
    });

    describe('given the product does exist', () => {
      it('should return a 200 status and the product', async () => {
        const newProd = await createProduct(productPayload);

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const { body, statusCode } = await supertest(app).get(`/api/v1/products/${newProd._id}`);

        expect(statusCode).toBe(200);

        expect(JSON.stringify(body.body.product._id)).toEqual(JSON.stringify(newProd._id));
      });
    });
  });

  describe('create product route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 401', async () => {
        const { statusCode } = await supertest(app).post('/api/v1/products');

        expect(statusCode).toBe(401);
      });
    });

    describe('given the user is logged in', () => {
      it('should return a 201 and create the product', async () => {
        const jwt = signJwt({ ...userPayload }, { expiresIn: config.EXPIRES });

        const { body, statusCode } = await supertest(app)
          .post('/api/v1/products')
          .set('Authorization', `Bearer ${jwt}`)
          .send({
            code: '10393',
            name: 'djsaphd312k',
            description: 'asd32e',
            image: 'sadas12.jpg',
            price: 12312,
            stock: 124122,
          });

        expect(statusCode).toBe(201);

        expect(body.body).toEqual({
          product: {
            code: '10393',
            name: 'djsaphd312k',
            description: 'asd32e',
            image: 'sadas12.jpg',
            price: 12312,
            stock: 124122,
            _id: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            __v: 0,
          },
        });
      });
    });
  });
});
