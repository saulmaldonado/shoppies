import axios from 'axios';

const { API_KEY } = process.env;

const url = 'http://www.omdbapi.com';

const imdbApi = axios.create({
  baseURL: url,
  params: { apikey: API_KEY },
});

export default imdbApi;
