import { application, server } from '../src/index.js';
import { describe, test, expect, afterAll } from 'vitest';
import supertest from 'supertest';

const requestWithSupertest = supertest(application);

afterAll(() => {
  server.close();
});

describe('GET /', () => {
  test('should work OK', async () => {
    const response = await requestWithSupertest.get('/');
    expect(response.status).toEqual(200);
  });
});
