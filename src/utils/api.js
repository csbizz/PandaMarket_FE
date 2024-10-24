import { axiosGet } from './axiosUtils';
import * as ownFetch from './fetchUtils.js';

// const SERVER = 'https://panda-market-api.vercel.app/products';
// const SERVER = 'https://pandamarket-be.onrender.com/products'; // mongodb
// const SERVER = 'https://pandamarket-be-postgres.onrender.com/products'; // postgres
const SERVER = `http://localhost:3000`;

// export async function getProducts(params = {}) {
//   return await ownFetch.fetchGet(SERVER, params);
// }

export async function getProducts(params = {}) {
  return await axiosGet(SERVER, '/products');
}
