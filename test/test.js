import request from 'supertest';
import app from '../index'; 

describe('GET /', () => {
  it('responds with a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
