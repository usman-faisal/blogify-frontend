import axios from "axios";

const BASE_URL = "http://localhost:3001/api/users";
const getAll = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const getUser = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

const createUser = async (payload) => {
  const response = await axios.post(BASE_URL, payload);
  return response.data;
};
export default { getUser, getAll, createUser };
