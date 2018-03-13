import { categoryConstants } from '../_constants/category.constants';

const token = localStorage.getItem('token');
const initialState = token ? { creatingcategory: true, token } : {};

export function createcategory(state = initialState, action) {
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

export function viewcategoryreducer(state = [], action) {
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
