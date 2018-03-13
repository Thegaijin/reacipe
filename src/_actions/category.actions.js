import { categoryConstants } from '../_constants/category.constants';
import { createCategoryAPIcall, getCategoriesAPIcall } from '../_services/category.services';
import * as alertActions from '../_actions/alert.actions';
// import { history } from '../_helpers/history';

export function createcategory(category) {
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
    return createCategoryAPIcall(category).then(
      () => {
        dispatch(success());
        dispatch(alertActions.success('Category created successfully'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      },
    );
  };
}

export function viewCategory() {
  function request() {
    return { type: categoryConstants.VIEW_ALL_CATEGORIES_REQUEST };
  }
  function success(categories) {
    return {
      type: categoryConstants.VIEW_ALL_CATEGORIES_SUCCESS,
      categories,
    };
  }
  function failure() {
    return { type: categoryConstants.VIEW_ALL_CATEGORIES_FAILURE };
  }
  return (dispatch) => {
    dispatch(request());
    return getCategoriesAPIcall().then(
      (response) => {
        dispatch(success(response.data[0]));
        console.log(response.data[0]);
        console.log('^^^^%%%%%%%%%%&&&&&&&', response.data);
        dispatch(alertActions.success('Your categories'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      },
    );
  };
}
