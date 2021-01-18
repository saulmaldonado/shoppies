import axios from 'axios';

const hostnames: Record<'development' | 'production' | 'test', string> = {
  development: 'http://localhost:3000/',
  production: '',
  test: '',
};

const api = axios.create({
  baseURL: hostnames[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
