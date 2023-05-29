import axios from 'axios';

const api = axios.create({
  baseURL: `http://ec2-3-144-89-176.us-east-2.compute.amazonaws.com:3001/`
});


export const createData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
}
