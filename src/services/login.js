import axios from "axios";

const BASE_URL = "http://localhost:3001/api/login";
const login = async (payload) => {
  const response = await axios.post(BASE_URL, payload);
  return response.data;
};

export default { login };
