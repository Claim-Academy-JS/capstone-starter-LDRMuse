import client from './client';

export const addAdmin = async (newAdmin) => {
  try {
    const insertRes = await client.db('BrowAndArrow').collection('users').insertOne(newAdmin);
    return insertRes;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdmin = async () => {
  try {
    const deleteRes = await client.db('BrowAndArrow').collection('users').remove();
    return deleteRes;
  } catch (error) {
    console.log(error);
  }
};
