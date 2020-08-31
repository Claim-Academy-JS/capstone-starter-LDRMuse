import express from 'express';
import cors from 'cors';

import travel from './routes/user';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.use('/user', user);

app.use((_, res) => {
  res.status(404).send('Sorry cannot find that!');
});

app.listen(5000);
