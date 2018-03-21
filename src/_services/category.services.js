// import { axiosInstance } from '../_services/yummyaxios';
import axios from 'axios';

const apiUrl = 'https://recipiapi.herokuapp.com';
// const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

export function createCategoryAPICall(category) {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  return axios.post(`${apiUrl}/categories/`, category, { headers });
}

// Get all categories
export function getCategoriesAPICall(value = null) {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  if (typeof value === 'number' && value > 0) {
    return axios.get(`${apiUrl}/categories/?page=${value}`, { headers });
  }
  if (typeof value === 'string') {
    return axios.get(`${apiUrl}/categories/?q=${value}`, { headers });
  } else {
    console.log('Returned returned', axios.get(`${apiUrl}/categories/`, { headers }));
    return axios.get(`${apiUrl}/categories/`, { headers });
  }
}

// For search
export function getACategoryAPIcall() {
  return axios.get(`${apiUrl}/categories/recipe_id/`);
}

export function editCategoryAPICall(category) {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  return axios.put(`${apiUrl}/categories/${category.category_id}/`, category, { headers });
}

export function deleteCategoryAPICall(category) {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  return axios.delete(`${apiUrl}/categories/${category.category_id}/`, { headers });
}
