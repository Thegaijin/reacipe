import { recipeConstants } from '../_constants/recipe.constants';
import { createrecipeAPIcall, getRecipesAPICall } from '../_services/recipe.services';
import * as alertActions from '../_actions/alert.actions';
import { history } from '../_helpers/history';

// export const recipeActions = {
//   create,
//   view,
//   edit,
//   _delete
// };

export function createRecipe(category, recipe) {
  function request() {
    return { type: recipeConstants.CREATE_RECIPE_REQUEST, recipe };
  }
  function success(recipe) {
    return { type: recipeConstants.CREATE_RECIPE_SUCCESS, recipe };
  }
  function failure(error) {
    return { type: recipeConstants.CREATE_RECIPE_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request(recipe));
    return createrecipeAPIcall(category, recipe).then(
      (response) => {
        dispatch(success());
        window.location.reload();
        dispatch(alertActions.success('recipe created successfully'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      },
    );
  };
}

export function getRecipes(categoryId) {
  function putToStoreRecipes(theRecipes) {
    return {
      type: recipeConstants.LOAD_RECIPES,
      theRecipes,
    };
  }
  return (dispatch) => {
    dispatch(putToStoreRecipes(categoryId));
  };
}

export function viewRecipes(categoryId) {
  function request() {
    return { type: recipeConstants.VIEW_ALL_RECIPES_REQUEST };
  }
  function success(recipes) {
    return { type: recipeConstants.VIEW_ALL_RECIPES_SUCCESS, recipes };
  }
  function failure(error) {
    return { type: recipeConstants.VIEW__ALL_RECIPES_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request());
    console.log('&^&^&^&^&^recipes&^&^&^&*&', categoryId);
    return getRecipesAPICall(categoryId).then(
      (response) => {
        console.log('&^&^&^&^&^recipes&^&^&^&*&', response.data[0]);
        dispatch(success(response.data[0]));
        console.log('&^&^&^&^&^After success&^&^&^&*&', response.data[0]);
        dispatch(alertActions.success('recipe returned successfully'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', error.data);
        // dispatch(failure(error));
        // dispatch(alertActions.error(error));
      },
    );
  };
}
