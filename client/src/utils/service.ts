import axios from "axios";

export const getData = (url: string, signal) => {
  return axios.get(url, { signal: signal });
};
