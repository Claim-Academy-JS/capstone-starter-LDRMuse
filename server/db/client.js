import dotenv from 'dotenv';

import { MongoClient } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});

(async () => {
  await client.connect();
  process.on('SIGINT', () => {
    client.close().then(() => {
      console.log('Closing');
    });

    process.exit(0);
  });
})();

export default client;
