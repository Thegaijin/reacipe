import { categoryConstants } from '../_constants/category.constants';

export function categoryReducer(state = [], action) {
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
    case categoryConstants.VIEW_ALL_CATEGORIES_REQUEST:
      return {
        loading: true,
      };
    case categoryConstants.VIEW_ALL_CATEGORIES_SUCCESS:
      console.log('$$$$$$$$$$$$$$$$login in $$$$$$$$@@@@@@@@@@========>>>>>>>>', action);
      console.log('$$$$$$$$$$$$$$$$categories$$$$$$$$@@@@@@@@@@========>>>>>>>', action.payload);
      // history.push('/dashboard');
      // return {
      //   ...state,
      //   ...action.payload,
      // };
      return action.payload;
    case categoryConstants.VIEW_ALL_CATEGORIES_FAILURE:
      return {
        error: action.error,
      };
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
