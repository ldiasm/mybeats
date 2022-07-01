import axios from 'axios';

const api = axios.create({
  baseURL: 'http://20.124.201.18/mybeats',
});

export default api;
