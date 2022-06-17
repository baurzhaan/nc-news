import axios from "axios";

export const getDataCopy = async (baseURL, setFunc) => {
  const fetchedData = await axios.get(baseURL);
  setFunc(fetchedData.data);
  
};