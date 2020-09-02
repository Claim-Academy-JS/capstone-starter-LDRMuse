import { Router } from 'express';

import { addAdmin } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>Hello from users</h1>');
});

router.post('/add', async ({ body }, res) => {
  try {
    const dbRes = await addAdmin(body);
    res.status(201);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database Error';
    res.status(500).send(error);
  }
});

export default router;
