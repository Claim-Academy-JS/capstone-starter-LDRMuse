import { Router } from 'express';

import { addClient, addChartEntry } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>Hello from clients</h1>');
});

router.post('/create', async ({ body }, res) => {
  try {
    const dbRes = await addClient(body);
    res.status(201);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database Error';
    res.status(500).send(error);
  }
});

router.patch('/chart-entry', async ({ body: { chart, email } }, res) => {
  console.log(chart, email);
  try {
    const dbRes = await addChartEntry(chart, email);
    res.status(201);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database Error';
    res.status(500).send(error);
  }
});

export default router;
