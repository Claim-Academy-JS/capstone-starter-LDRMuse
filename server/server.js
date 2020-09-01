import express from 'express';
import cors from 'cors';

import users from './routes/users';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.get('/', (_, res) => {
  res.send('<h1>Express</h1>');
});

app.use('/users', users);

app.use((_, res) => {
  res.status(404).send('Sorry cannot find that!');
});

app.listen(5000, () => {
  console.log('server running on 5000');
});
