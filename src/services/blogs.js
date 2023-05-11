import axios from "axios";
const baseUrl = `${process.env.REACT_APP_BASE_URL}/api/blogs`;
let token = "";
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (payload) => {
  const response = await axios.post(baseUrl, payload, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

const update = async (id, payload) => {
  const response = await axios.put(`${baseUrl}/${id}`, payload, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

const addLike = async (id) => {
  const response = await axios.post(`${baseUrl}/${id}/likes`, null, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

const addComment = async (id, comment) => {
  const response = await axios.post(
    `${baseUrl}/${id}`,
    { comment },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

export default {
  getAll,
  setToken,
  create,
  update,
  remove,
  addComment,
  addLike,
};
