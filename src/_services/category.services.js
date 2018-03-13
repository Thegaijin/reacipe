// import { axiosInstance } from '../_services/yummyaxios';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/v1';
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

export function createCategoryAPIcall(category) {
  return axios.post(`${apiUrl}/categories/`, category, { headers });
}

export function getCategoriesAPIcall() {
  return axios.get(`${apiUrl}/categories/`, { headers });
}

export function getACategoryAPIcall() {
  return axios.get(`${apiUrl}/categories/recipe_id/`);
}
