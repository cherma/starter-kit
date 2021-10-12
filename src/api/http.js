import axios from 'axios';
import useSWR from 'swr';

const http = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'x-ajax-request': 'true',
  },
  maxContentLength: 1024 * 1024 * 20,
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (parseInt(error?.response?.status, 10) === 401) {
      console.log('Un-Authorized')
    }
    return Promise.reject(error.response);
  }
);

const fetcher = (url) => {
  return http.get(url).then((res) => res.data);
};

const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { fetcher, useFetch, http };
