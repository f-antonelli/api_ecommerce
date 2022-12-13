/* eslint-disable no-underscore-dangle */
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import supertest from 'supertest';

import { signJwt } from '../../helpers/jwt';
import server from '../../helpers/server';
import { createProduct } from '../products/products.service';

const app = server();

export const productPayload = {
  code: '10293',
  name: 'djsakhd312k',
  description: 'asd32e',
  image: 'sadas12.jpg',
  price: 12312,
  stock: 124122,
};

export const userPayload = {
  _id: '638fd07614e71ebca1f03735',
  email: 'eelke@gmail.com',
  role: 'user',
  username: 'eelke',
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
        const jwt = signJwt({ ...userPayload }, { expiresIn: '3hr' });

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
