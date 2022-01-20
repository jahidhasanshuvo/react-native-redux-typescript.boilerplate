import axios from 'axios';
import {serverUrl} from './AxiosInstance';
import {axiosInstance} from './AxiosInstance';

async function getIRequestProp(severType, isMultipart) {
  return {
    serverUrl: serverUrl,
    requestHeader: {
      'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    },
  };
}
async function get(url, parameter, isJsonServer) {
  const {requestHeader} = await getIRequestProp(isJsonServer);
  return axiosInstance.get(serverUrl + url, {
    params: parameter,
    headers: requestHeader,
  });
}
async function postWithoutToken(url, body) {
  return axios.post(serverUrl + url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
async function post(url, body, isJsonServer, isMultipart) {
  const {requestHeader} = getIRequestProp(isJsonServer, isMultipart);
  return axios.post(url, body, {
    headers: requestHeader,
  });
}
async function put(url, body, isJsonServer) {
  const {requestHeader} = getIRequestProp(isJsonServer);
  return axios.put(serverUrl + url, body, {
    headers: requestHeader,
  });
}
async function patch(url, body, isJsonServer) {
  const {requestHeader} = getIRequestProp(isJsonServer);
  return axios.patch(url, body, {
    headers: requestHeader,
  });
}
async function remove(url, body, isJsonServer) {
  const {requestHeader} = getIRequestProp(isJsonServer);
  return axios.delete(url, {
    data: body,
    headers: requestHeader,
  });
}
const AxiosServices = {
  get,
  post,
  put,
  patch,
  remove,
  postWithoutToken,
};
export default AxiosServices;
