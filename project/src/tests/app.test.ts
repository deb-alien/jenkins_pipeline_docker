import request from 'supertest';
import app from '../app';

describe('Express App', () => {
	it('should return OK on /health', async () => {
		const res = await request(app).get('/health');
		expect(res.statusCode).toBe(200);
		expect(res.body).toHaveProperty('status', 'OK');
	});

	it('should say Hello Jenkins', async () => {
		const res = await request(app).get('/');
		expect(res.text).toContain('Hello, Jenkins!');
	});

	it('should add two numbers', async () => {
		const res = await request(app).get('/add/3/7');
		expect(res.body.sum).toBe(10);
	});

	it('should echo posted JSON', async () => {
		const payload = { message: 'hi' };
		const res = await request(app).post('/echo').send(payload);
		expect(res.body.you_sent).toEqual(payload);
	});
});
