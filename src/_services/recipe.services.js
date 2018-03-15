import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/v1/';
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

export function createrecipeAPIcall(category, recipe) {
  return axios.post(`${apiUrl}recipes/${category.category_id}/`, recipe);
}

export function getRecipesAPICall(categoryId) {
  console.log('%&&%&%&%&%&%&%recipe get&%&&%&%&%&&%%&&%', categoryId);
  return axios.get(`${apiUrl}recipes/${categoryId}/`, { headers });
}
