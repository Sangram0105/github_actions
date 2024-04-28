const request = require('supertest');
const app = require('../index');

describe('Server', () => {
  afterAll(() => {
    app.close(); // Close the server after all tests
  });

  it('responds with status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('responds with plain text "Hello, world!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, world!\n');
  });
});
