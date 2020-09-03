import { Router } from 'express';

import { addAdmin } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>Hello from admins</h1>');
});

router.post('/create', async ({ body }, res) => {
  try {
    const dbRes = await addAdmin(body);
    res.status(201);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database Error';
    res.status(500).send(error);
  }
});

// TODO: Make a delete for deleteAdmin

export default router;
