import { Router } from 'express';

import { addClient, addChartEntry, showAllClients } from '../db';

const router = new Router();

router.get('/', async (_, res) => {
  try {
    const dbRes = await showAllClients();
    res.status(200);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database Error';
  }
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
