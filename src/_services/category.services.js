// import { axiosInstance } from '../_services/yummyaxios';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/v1';
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

export function createCategoryAPICall(category) {
  return axios.post(`${apiUrl}/categories/`, category, { headers });
}

// Get all categories
export function getCategoriesAPICall(pageNum = null) {
  if (typeof pageNum === 'number' && pageNum > 0) {
    return axios.get(`${apiUrl}/categories/?page=${pageNum}`, { headers });
  } else {
    return axios.get(`${apiUrl}/categories/`, { headers });
  }
}

// For search
export function getACategoryAPIcall() {
  return axios.get(`${apiUrl}/categories/recipe_id/`);
}

export function editCategoryAPICall(category) {
  console.log('%&&%&%&%&%&%&%&%&&%&%&%&&%%&&%', category);
  return axios.put(`${apiUrl}/categories/${category.category_id}/`, category, { headers });
}

export function deleteCategoryAPICall(category) {
  return axios.delete(`${apiUrl}/categories/${category.category_id}/`, { headers });
}
