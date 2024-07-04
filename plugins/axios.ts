import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  axios.defaults.baseURL = nuxtApp.$config.apiBaseURL;
  nuxtApp.provide('axios', axios);
});
