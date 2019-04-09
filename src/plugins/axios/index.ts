import axios, { AxiosStatic, AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

declare module 'Vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default {
  install(Vue: any) {
    Vue.prototype.$axios = axios;
  },
};
