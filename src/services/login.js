import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api/login`;
const login = async (payload) => {
  const response = await axios.post(BASE_URL, payload);
  return response.data;
};

export default { login };
