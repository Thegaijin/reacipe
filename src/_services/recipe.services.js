import axios from 'axios';

// const apiUrl = 'http://127.0.0.1:5000/api/v1/';
// const apiUrl = 'https://recipiapi.herokuapp.com/api/v1/';
// const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
const apiUrl = 'http://api.thegaijin.xyz/api/v1/';

export function createRecipeAPIcall(categoryId, recipe) {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  return axios.post(`${apiUrl}recipes/${categoryId}/`, recipe, { headers });
}

export function getRecipesAPICall(categoryId, value = null) {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  if (typeof value === 'number' && value > 0) {
    return axios.get(`${apiUrl}recipes/${categoryId}/?page=${value}`, { headers });
  }
  if (typeof value === 'string') {
    return axios.get(`${apiUrl}recipes/${categoryId}/?q=${value}`, { headers });
  } else {
    return axios.get(`${apiUrl}recipes/${categoryId}/`, { headers });
  }
}
export function editRecipeAPICall(recipe) {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  return axios.put(`${apiUrl}recipes/${recipe.category}/${recipe.recipe_id}/`, recipe, {
    headers,
  });
}
export function deleteRecipeAPICall(recipe) {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
  return axios.delete(`${apiUrl}recipes/${recipe.category}/${recipe.recipe_id}/`, { headers });
}
