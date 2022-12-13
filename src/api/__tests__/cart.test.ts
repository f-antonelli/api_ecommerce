/* eslint-disable no-underscore-dangle */
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import supertest from 'supertest';

import { signJwt } from '../../helpers/jwt';
import server from '../../helpers/server';

const app = server();

export const userPayload = {
  _id: '638fd07614e71ebca1f03735',
  email: 'eelke@gmail.com',
  role: 'user',
  username: 'eelke',
  createdAt: '2022-12-06T23:29:58.186Z',
  updatedAt: '2022-12-06T23:29:58.186Z',
  __v: 0,
};

describe('cart', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();

    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('given the user is logged in', () => {
    it('should return a 201 and create the product', async () => {
      const jwt = signJwt({ ...userPayload }, { expiresIn: '3hr' });

      const { statusCode } = await supertest(app)
        .post(`/api/v1/cart/${userPayload._id}`)
        .set('Authorization', `Bearer ${jwt}`);

      expect(statusCode).toBe(201);
    });

    it('should return a 500 if has a cart', async () => {
      const jwt = signJwt({ ...userPayload }, { expiresIn: '3hr' });

      const { statusCode } = await supertest(app)
        .post(`/api/v1/cart/${userPayload._id}`)
        .set('Authorization', `Bearer ${jwt}`);

      expect(statusCode).toBe(500);
    });
  });
});
