import axios from 'axios';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IP6v localhost address
    window.location.hostname === '[::1]' ||
    //127.0.0.1/8 is considered localhost for IPv4
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const API_URL = isLocalhost
  ? 'http://localhost:5000'
  : 'https://backend.serwisartech.pl';

export const createEmail = (data) => axios.post(`${API_URL}/send`, data);
export const fetchSiteContent = () => axios.get(`${API_URL}/`);
export const fetchTypewriters = (low, high) =>
  axios.get(`${API_URL}/typewriters`, {
    params: {
      lowRangeFilter: low,
      highRangeFilter: high,
    },
  });
export const fetchSingleWriter = (slug) =>
  axios.get(`${API_URL}/typewriters/${slug}`);
export const fetchShop = () => axios.get(`${API_URL}/shop`);
