import axios from 'axios';

const api = axios.create({
  baseURL: 'https://capindex-api-production.up.railway.app/', // Hard-coded base URL
});

export default api;
