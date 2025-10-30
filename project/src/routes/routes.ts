import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('Hello, Jenkins!');
});

router.get('/add/:a/:b', (req: Request, res: Response) => {
	const { a, b } = req.params;
	const sum = Number(a) + Number(b);
	res.json({ sum });
});

router.post('/echo', (req: Request, res: Response) => {
	res.json({ you_sent: req.body });
});

export default router;
