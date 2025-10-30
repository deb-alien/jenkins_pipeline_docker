import express, { Request, Response } from 'express';

import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.get('/health', (_req: Request, res: Response) => {
	res.status(200).json({ status: 'OK' });
});

export default app;
