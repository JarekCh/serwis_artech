import axios from 'axios';

const url = 'http://localhost:5000';

export const createEmail = (data) => axios.post(`${url}/send`, data);
export const fetchSiteContent = () => axios.get(`${url}/`);
export const fetchTypewriters = () => axios.get(`${url}/typewriters`);
export const fetchSingleWriter = (slug) =>
  axios.get(`${url}/typewriters${slug}`);
export const fetchShop = () => axios.get(`${url}//shop`);
