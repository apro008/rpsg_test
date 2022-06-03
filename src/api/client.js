import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/exchange_rates',
});

export default client;
