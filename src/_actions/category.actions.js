import { categoryConstants } from '../_constants/category.constants';
import {
  createCategoryAPICall,
  getCategoriesAPICall,
  editCategoryAPICall,
  deleteCategoryAPICall,
} from '../_services/category.services';
import * as alertActions from '../_actions/alert.actions';

export function createCategory(category) {
  function request() {
    return { type: categoryConstants.CREATE_CATEGORY_REQUEST, category };
  }
  function success() {
    return { type: categoryConstants.CREATE_CATEGORY_SUCCESS, category };
  }
  function failure() {
    return { type: categoryConstants.CREATE_CATEGORY_FAILURE, category };
  }
  return (dispatch) => {
    dispatch(request(category));
    return createCategoryAPICall(category).then(
      () => {
        dispatch(success());
        window.location.reload();
        dispatch(alertActions.success('Category created successfully'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%%create%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      },
    );
  };
}

export function viewCategory(pageNum = null) {
  function request() {
    return { type: categoryConstants.VIEW_ALL_CATEGORIES_REQUEST };
  }
  function success(response) {
    return {
      type: categoryConstants.VIEW_ALL_CATEGORIES_SUCCESS,
      payload: response,
    };
  }
  function failure(error) {
    return { type: categoryConstants.VIEW_ALL_CATEGORIES_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request());
    return getCategoriesAPICall(pageNum).then(
      (response) => {
        dispatch(success(response.data));
        console.log('^^^^%%%%%%%%view%%&&&&&&&', response.data);
        dispatch(alertActions.success('Your categories'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%view%%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      },
    );
  };
}

export function currentCategory(category) {
  function putToStoreCategory(userCategory) {
    return {
      type: categoryConstants.LOAD_CURRENT_CATEGORY,
      userCategory,
    };
  }
  return (dispatch) => {
    dispatch(putToStoreCategory(category));
  };
}
export function editCategory(category) {
  console.log('$%$%%$%$%$%$%$%$%$@@@@@@', category);
  function request() {
    return { type: categoryConstants.EDIT_CATEGORY_REQUEST, category };
  }
  function success() {
    return {
      type: categoryConstants.EDIT_CATEGORY_SUCCESS,
      category,
    };
  }
  function failure() {
    return { type: categoryConstants.EDIT_CATEGORY_FAILURE, category };
  }
  return (dispatch) => {
    dispatch(request(category));
    return editCategoryAPICall(category).then(
      (response) => {
        dispatch(success());
        window.location.reload();
        console.log('^^^^%%%%%%%%edit%%&&&&&&&', response.data);
        dispatch(alertActions.success('Your categories'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%edit%%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      },
    );
  };
}

export function deleteCategory(category) {
  function request() {
    return { type: categoryConstants.DELETE_CATEGORY_REQUEST, category };
  }
  function success() {
    return { type: categoryConstants.DELETE_CATEGORY_SUCCESS, category };
  }
  function failure() {
    return { type: categoryConstants.DELETE_CATEGORY_FAILURE, category };
  }
  return (dispatch) => {
    dispatch(request(category));
    return deleteCategoryAPICall(category).then(
      () => {
        dispatch(success());
        window.location.reload();
        dispatch(alertActions.success('Category deleted successfully'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%%delete%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      },
    );
  };
}
