import { categoryConstants } from '../_constants/category.constants';

export function createCategory(state = [], action) {
  switch (action.type) {
    case categoryConstants.CREATE_CATEGORY_REQUEST:
      return {
        creatingcategory: true,
        user: action.token,
      };
    case categoryConstants.CREATE_CATEGORY_SUCCESS:
      return {
        categoryCreated: true,
        user: action.token,
      };
    case categoryConstants.CREATE_CATEGORY_FAILURE:
      return {};
    default:
      return state;
  }
}

export function viewCategoryReducer(state = [], action) {
  switch (action.type) {
    case categoryConstants.VIEW_ALL_CATEGORIES_REQUEST:
      return {
        loading: true,
      };
    case categoryConstants.VIEW_ALL_CATEGORIES_SUCCESS:
      console.log('$$$$$$$$$$$$$$$$$$$$$$$', action);
      return {
        ...state,
        ...action,
      };
    case categoryConstants.VIEW_ALL_CATEGORIES_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}

export function editCategoryReducer(state = [], action) {
  switch (action.type) {
    case categoryConstants.EDIT_CATEGORY_REQUEST:
      console.log('@@@@@@@@@@@@@@@@@@@@@#######################', action);
      return {
        loading: true,
      };
    case categoryConstants.EDIT_CATEGORY_SUCCESS:
      console.log('$$$$$$$$$$$$$$$$$$$$$$$', action);
      return {
        ...state,
        ...action,
      };
    case categoryConstants.EDIT_CATEGORY_FAILURE:
      return {
        error: action.error,
      };
    case categoryConstants.LOAD_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.userCategory,
      };
    default:
      return state;
  }
}

export function deleteCategoryReducer(state = [], action) {
  switch (action.type) {
    case categoryConstants.DELETE_CATEGORY_REQUEST:
      console.log('@@@@@@@@@@@@@@@@@@@@@delete#######################', action);
      return {
        loading: true,
      };
    case categoryConstants.DELETE_CATEGORY_SUCCESS:
      console.log('$$$$$$$$$$$$delete$$$$$$$$$$$', action);
      return {
        ...state,
        ...action,
      };
    case categoryConstants.DELETE_CATEGORY__FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
