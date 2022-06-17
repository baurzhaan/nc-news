import axios from "axios";

export const getData = async (baseURL) => {
  const fetchedData = await axios.get(baseURL);
  return fetchedData.data;
};