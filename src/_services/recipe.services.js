import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/v1';
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
// axios.commons = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

export function createRecipeAPIcall(categoryId, recipe) {
  return axios.post(`${apiUrl}/recipes/${categoryId}/`, recipe, { headers });
}

export function getRecipesAPICall(categoryId, pageNum = null) {
  console.log('%&&%&%&%&%&%&%recipe get&%&&%&%&%&&%%&&%', categoryId);
  if (typeof pageNum === 'number' && pageNum > 0) {
    return axios.get(`${apiUrl}/recipes/${categoryId}/?page=${pageNum}`, { headers });
  } else {
    return axios.get(`${apiUrl}/recipes/${categoryId}/`, { headers });
  }
}
export function editRecipeAPICall(recipe) {
  console.log('recipe recipe recipe recipe', recipe);
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXX', recipe.category);
  console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYY', recipe.recipe_id);
  console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYY', recipe.ingredients);
  return axios.put(`${apiUrl}/recipes/${recipe.category}/${recipe.recipe_id}/`, recipe, {
    headers,
  });
}
export function deleteRecipeAPICall(recipe) {
  return axios.delete(`${apiUrl}/recipes/${recipe.category}/${recipe.recipe_id}/`, { headers });
}
