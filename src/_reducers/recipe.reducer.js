import { recipeConstants } from '../_constants/recipe.constants';

export function viewRecipeReducer(state = [], action) {
  switch (action.type) {
    case recipeConstants.VIEW_ALL_RECIPES_REQUEST:
      return {
        loading: true,
      };
    case recipeConstants.VIEW_ALL_RECIPES_SUCCESS:
      console.log('$$$$$$$$$$$recipe$$$$$$$$$$$$', action);
      return {
        ...state,
        ...action,
      };
    case recipeConstants.VIEW_ALL_RECIPES_FAILURE:
      return {
        error: action.error,
      };
    case recipeConstants.LOAD_RECIPES:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
}
