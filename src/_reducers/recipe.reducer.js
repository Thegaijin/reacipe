import { recipeConstants } from '../_constants/recipe.constants';

export function recipeReducer(state = [], action) {
  switch (action.type) {
    case recipeConstants.VIEW_ALL_RECIPES_REQUEST:
      return {
        loading: true,
      };
    case recipeConstants.VIEW_ALL_RECIPES_SUCCESS:
      console.log('$$$$$$$$$$$recipe$$$$$$$$$$$$------>>>>>', action);
      return action.payload;
    case recipeConstants.VIEW_ALL_RECIPES_FAILURE:
      return {
        error: action.error,
      };
    case recipeConstants.LOAD_RECIPES:
      return {
        ...state,
        ...action,
      };
    case recipeConstants.EDIT_RECIPE_REQUEST:
      console.log('@@@@@@@@@@@@@@@@@@@@@#######################', action);
      return {
        loading: true,
      };
    case recipeConstants.EDIT_RECIPE_SUCCESS:
      console.log('$$$$$$$$$$$$$$$$$$$$$$$', action);
      return {
        ...state,
        ...action,
      };
    case recipeConstants.EDIT_RECIPE_FAILURE:
      return {
        error: action.error,
      };
    case recipeConstants.LOAD_RECIPE_CATEGORY:
      return {
        ...state,
        currentRecipe: action.theRecipe,
      };
    default:
      return state;
  }
}
