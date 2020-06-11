import axios from 'axios';

const http = axios.create({
  baseURL: `${window.location.protocol}//${window.location.host}`,
  headers: {
    Accept: 'application/json',
  },
  maxContentLength: 1024 * 1024 * 20
});

http.interceptors.response.use(
  response => response,
  error => {
    if(error.response.status === 401) {
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default http;