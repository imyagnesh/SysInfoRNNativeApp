import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://1392-122-169-37-62.ngrok.io',
  timeout: 3000,
  timeoutErrorMessage: 'Server down.. Please try after sometime.',
});

export default axiosInstance;
