import axios from "axios";

export const getData = (baseURL) => {
  return axios.get(baseURL)
  .then(response => response.data)
};
