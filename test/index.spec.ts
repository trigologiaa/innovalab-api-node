import supertest from 'supertest';
import { afterAll, describe, expect, test } from 'vitest';

import { application, server } from '../src/index.js';

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
