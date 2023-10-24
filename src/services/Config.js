import axios from "axios";
import { userLocalStorage } from "./localStorage";
import { store } from "..";
import { setLoadingOFF, setLoadingON } from "../redux/spinnerSlice";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjA3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTc2OTYwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzA5OTE3MjAwfQ.KMixzquIcyG1HcsZ_iekv3cHfqWMebGVfzp349mNosg";

export const configHeaders = () => {
  return {
    TokenCybersoft: TOKEN_CYBER,
  };
};
export const BASE_URL = "https://movienew.cybersoft.edu.vn/api";
export const GOURGID = "GP12";

// axios instance

export const https = axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
    Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
  },
  // accessToken
});

export const USER_LOGIN = "USER_LOGIN";

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingON());
    console.log("API di");
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOFF());
    console.log("API ve");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(setLoadingOFF());
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
