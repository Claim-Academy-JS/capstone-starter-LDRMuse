import { Router } from 'express';

import { addUser } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>yo</h1>');
});

router.post('/get-started', async ({ body }, res) => {
  try {
    const dbRes = await addUser(body);
    res.status(201);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database Error';
    res.status(500).send(error);
  }
});


export default router;
