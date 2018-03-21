import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/v1';
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
// axios.commons = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

export function createRecipeAPIcall(categoryId, recipe) {
  return axios.post(`${apiUrl}/recipes/${categoryId}/`, recipe, { headers });
}

export function getRecipesAPICall(categoryId, value = null) {
  if (typeof value === 'number' && value > 0) {
    return axios.get(`${apiUrl}/recipes/${categoryId}/?page=${value}`, { headers });
  }
  if (typeof value === 'string') {
    return axios.get(`${apiUrl}/recipes/${categoryId}/?q=${value}`, { headers });
  } else {
    return axios.get(`${apiUrl}/recipes/${categoryId}/`, { headers });
  }
}
export function editRecipeAPICall(recipe) {
  return axios.put(`${apiUrl}/recipes/${recipe.category}/${recipe.recipe_id}/`, recipe, {
    headers,
  });
}
export function deleteRecipeAPICall(recipe) {
  return axios.delete(`${apiUrl}/recipes/${recipe.category}/${recipe.recipe_id}/`, { headers });
}
