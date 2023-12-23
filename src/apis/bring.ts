import axios from "axios";

export const bring = async () => {
  const { data } = await axios.get(process.env.REACT_APP_BASE_URL + "/bring");
  return data;
};
