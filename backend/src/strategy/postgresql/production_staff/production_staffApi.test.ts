import request from 'supertest';
import app from '../../../server';

describe('Production Staff API', () => {
  it('should return production staff', async () => {
    const res = await request(app).get('/api/production-staff');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});