import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://deeb-106-215-40-35.ngrok.io',
  timeout: 3000,
  timeoutErrorMessage: 'Server down.. Please try after sometime.',
});

export default axiosInstance;
