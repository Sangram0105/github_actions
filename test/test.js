const request = require('supertest');
const server = require('../index');

describe('GET /', () => {
  it('responds with status code 200', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('responds with plain text "Hello, world!"', async () => {
    const response = await request(server).get('/');
    expect(response.text).toBe('Hello, world!\n');
  });
});
