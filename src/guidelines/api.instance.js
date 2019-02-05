import axios from 'axios';
import config from './base.config';

// Set config defaults when creating the api instance
var API = axios.create({
  baseURL: config.apiurl
});

API.defineRequestInterceptor = function () {
  API.interceptors.request.use(function (config) {

    let acesstoken = localStorage.getItem("at");
    let contenttype = localStorage.getItem("ct");

    if (acesstoken && contenttype) {
      config.headers.common['authorizationToken'] = acesstoken;
      config.headers.common['Content-Type'] = contenttype;
    }
    return config;

  }, function (error) {
    return Promise.reject(error);
  });
}

API.defineResponseInterceptor = function (route) {
  API.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response && error.response.status === 401) {
      if (route.location.pathname !== "/") {
        localStorage.clear();
        route.replace('/');
      }
    }

    return Promise.reject(error);
  });
}

export default API;