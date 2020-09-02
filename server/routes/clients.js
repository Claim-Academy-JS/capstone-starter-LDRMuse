import { Router } from 'express';

import { addClient } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>Hello from clients</h1>');
});

router.post('/add', async ({ body }, res) => {
  try {
    const dbRes = await addClient(body);
    res.status(201);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database Error';
    res.status(500).send(error);
  }
});

// TODO: Make a delete for deleteClient

export default router;
