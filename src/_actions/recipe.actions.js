import { recipeConstants } from '../_constants/recipe.constants';
import {
  createRecipeAPIcall,
  getRecipesAPICall,
  editRecipeAPICall,
  deleteRecipeAPICall,
} from '../_services/recipe.services';
import * as alertActions from '../_actions/alert.actions';

export function createRecipe(categoryId, recipe) {
  function request() {
    return { type: recipeConstants.CREATE_RECIPE_REQUEST, recipe };
  }
  function success() {
    return { type: recipeConstants.CREATE_RECIPE_SUCCESS, recipe };
  }
  function failure(error) {
    return { type: recipeConstants.CREATE_RECIPE_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request(recipe));
    return createRecipeAPIcall(categoryId, recipe).then(
      (response) => {
        dispatch(success());
        dispatch(alertActions.success(response.data.message));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
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

export function viewRecipes(categoryId, pageNum = null) {
  function request() {
    return { type: recipeConstants.VIEW_ALL_RECIPES_REQUEST };
  }
  function success(response) {
    return {
      type: recipeConstants.VIEW_ALL_RECIPES_SUCCESS,
      payload: response,
    };
  }
  function failure(error) {
    return { type: recipeConstants.VIEW__ALL_RECIPES_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request());
    console.log('&^&^&^&^&^recipes&^&^&^&*&', categoryId);
    return getRecipesAPICall(categoryId, pageNum).then(
      (response) => {
        console.log('These are your recipes', response);
        dispatch(success(response.data));
        dispatch(alertActions.success(response.data.message));
      },
      (error) => {
        // console.log('The error of errors is here', error);
        // dispatch(failure(error.response));
        // dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function currentRecipe(recipe) {
  function addRecipeToStore(theRecipe) {
    return {
      type: recipeConstants.LOAD_RECIPE_CATEGORY,
      theRecipe,
    };
  }

  return (dispatch) => {
    dispatch(addRecipeToStore(recipe));
  };
}
export function editRecipe(recipe) {
  function request() {
    return { type: recipeConstants.EDIT_RECIPE_REQUEST, recipe };
  }
  function success() {
    return {
      type: recipeConstants.EDIT_RECIPE_SUCCESS,
      recipe,
    };
  }
  function failure() {
    return { type: recipeConstants.EDIT_RECIPE_FAILURE, recipe };
  }
  return (dispatch) => {
    dispatch(request(recipe));
    return editRecipeAPICall(recipe).then(
      (response) => {
        dispatch(success());
        window.location.reload();
        dispatch(alertActions.success(response.data.message));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}

export function deleteRecipe(recipe) {
  function request() {
    return { type: recipeConstants.DELETE_RECIPE_REQUEST, recipe };
  }
  function success() {
    return { type: recipeConstants.DELETE_RECIPE_SUCCESS, recipe };
  }
  function failure() {
    return { type: recipeConstants.DELETE_RECIPE_FAILURE, recipe };
  }
  return (dispatch) => {
    dispatch(request(recipe));
    return deleteRecipeAPICall(recipe).then(
      (response) => {
        dispatch(success(response.data));
        window.location.reload();
        dispatch(alertActions.success(response.data.message));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.response.data.message));
      },
    );
  };
}
