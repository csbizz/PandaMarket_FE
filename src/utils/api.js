import * as ownFetch from './fetchUtils.js';

// const SERVER = 'https://panda-market-api.vercel.app/products';
// const SERVER = 'https://pandamarket-be.onrender.com/products'; // mongodb
const SERVER = 'https://pandamarket-be-postgres.onrender.com/products'; // postgres

export async function getProducts(params = {}) {
  return await ownFetch.fetchGet(SERVER, params);
}
