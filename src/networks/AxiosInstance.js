import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ResponseCode from './ResponseCode';
import ApiServices from './ApiServices';

export const serverUrl = 'http://10.0.2.2:4000';
export const axiosInstance = axios.create({
  baseURL: serverUrl,
});

axiosInstance.interceptors.request.use(async request => {
  if (!request.headers.Authorization) {
    const accesToken = await AsyncStorage.getItem('accessToken');
    request.headers.common.Authorization = 'Bearer ' + accesToken;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response.status === ResponseCode.FORBIDDEN &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      let accessToken = '';
      await axios
        .post(
          serverUrl + ApiServices.TOKEN,
          {token: refreshToken},
          {
            headers: {
              'Content-type': 'application/json',
            },
          },
        )
        .then(res => {
          accessToken = res.data.access_token;
        });
      await AsyncStorage.setItem('accessToken', accessToken);
      originalRequest.headers.Authorization = 'Bearer ' + accessToken;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);
