import express from 'express';
import cors from 'cors';

import adminRouter from './routes/admin';
import clientsRouter from './routes/clients';

const app = express();

// We accept any client requests...but only CORS allowed for...
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.get('/', (_, res) => {
  res.send('<h1>Hello from Express</h1>');
});

app.use('/admin', adminRouter);
app.use('/clients', clientsRouter);

app.use((_, res) => {
  res.status(404).send('Sorry cannot find that!');
});

app.listen(5000, () => {
  console.info('server running on 5000');
});
