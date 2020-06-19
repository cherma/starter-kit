import axios from 'axios';
//const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '';
const http = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
  maxContentLength: 1024 * 1024 * 20
});

http.interceptors.response.use(
  response => response,
  error => {
    if(error.response.status === 401) {
      //window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default http;