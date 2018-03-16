import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/v1/';
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
// axios.commons = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

export function createRecipeAPIcall(categoryId, recipe) {
  return axios.post(`${apiUrl}recipes/${categoryId}/`, recipe, { headers });
}

export function getRecipesAPICall(categoryId) {
  console.log('%&&%&%&%&%&%&%recipe get&%&&%&%&%&&%%&&%', categoryId);
  return axios.get(`${apiUrl}recipes/${categoryId}/`, { headers });
}
