import supertest, { Response, Test } from 'supertest';
import TestAgent from 'supertest/lib/agent.js';
import { afterAll, describe, expect, test } from 'vitest';

import { application, server } from '@/index.js';

const requestWithSupertest: TestAgent<Test> = supertest(application);

afterAll((): void => {
  server.close();
});

describe('GET /', (): void => {
  test('should work OK', async (): Promise<void> => {
    const response: Response = await requestWithSupertest.get('/');
    expect(response.status).toEqual(200);
  });
});
