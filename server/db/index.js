import client from './client';

export const addAdmin = async (newAdmin) => {
  try {
    const insertRes = await client.db('BrowAndArrow').collection('admins').insertOne(newAdmin);
    return insertRes;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdmin = async () => {
  try {
    const deleteRes = await client.db('BrowAndArrow').collection('admins').remove();
    return deleteRes;
  } catch (error) {
    console.log(error);
  }
};

export const addClient = async (newClient) => {
  try {
    const insertRes = await client.db('BrowAndArrow').collection('clients').insertOne(newClient);
    return insertRes;
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async () => {
  try {
    const deleteRes = await client.db('BrowAndArrow').collection('clients').remove();
    return deleteRes;
  } catch (error) {
    console.log(error);
  }
};

export const addChartEntry = async (person, chart) => {
  try {
    const insertRes = await client.db('BrowAndArrow').collection('clients').updateOne(person, { $push: { charts: chart } });
    return insertRes;
  } catch (error) {
    console.log(error);
  }
};
