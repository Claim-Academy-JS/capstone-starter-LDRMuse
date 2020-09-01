import client from './client';

export const addUser = async (newUser) => {
  try {
    const insertRes = await client.db('BrowAndArrow').collection('users').insertOne(newUser);
    return insertRes;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async () => {
  try {
    const deleteRes = await client.db('BrowAndArrow').collection('users').remove();
    return deleteRes;
  } catch (error) {
    console.log(error);
  }
};
