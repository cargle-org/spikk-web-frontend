/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const defaultOptions = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create instance
const axiosService: AxiosInstance = axios.create(defaultOptions);

// Set the AUTH token for any request
axiosService.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  config.headers!.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axiosService;
