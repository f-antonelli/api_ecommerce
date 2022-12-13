/* eslint-disable @typescript-eslint/ban-ts-comment */
import supertest from 'supertest';

import config from '../../config';
import server from '../../helpers/server';
import * as UserService from '../auth/auth.service';

const app = server();

const userPayload = {
  email: config.TEST_EMAIL,
  username: config.TEST_USERNAME,
};

const userInput = {
  email: config.TEST_EMAIL,
  username: config.TEST_USERNAME,
  password: config.TEST_PASSWORD,
  passwordConfirmation: config.TEST_CONF_PASSWORD,
  role: config.TEST_ROLE,
};

describe('user', () => {
  describe('user registration', () => {
    describe('given the username and password are valid', () => {
      it('should return the user payload', async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, 'createUser')
          // @ts-ignore
          .mockReturnValueOnce(userPayload);

        const { statusCode, body } = await supertest(app)
          .post('/api/v1/auth/signup')
          .send({ ...userInput });

        expect(statusCode).toBe(201);

        expect(body.body).toEqual(userPayload);

        expect(createUserServiceMock).toHaveBeenCalledWith(userInput);
      });
    });
  });

  describe('given the passwords do not match', () => {
    it('should return a 400', async () => {
      const createUserServiceMock = jest
        .spyOn(UserService, 'createUser')
        // @ts-ignore
        .mockReturnValueOnce({ ...userPayload });

      const { statusCode } = await supertest(app)
        .post('/api/v1/auth/signup')
        .send({ ...userInput, passwordConfirmation: 'dklsjahdlkja' });

      expect(statusCode).toBe(422);

      expect(createUserServiceMock).not.toHaveBeenCalled();
    });
  });
});
