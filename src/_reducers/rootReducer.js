import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { reducer as modalReducer } from 'redux-modal';

import { alert } from '../_reducers/alert.reducer';
import { authentication } from '../_reducers/authentication.reducer';
import { registration } from '../_reducers/registration.reducer';
import {
  viewCategoryReducer,
  editCategoryReducer,
  deleteCategoryReducer,
} from '../_reducers/category.reducer';

const rootReducer = combineReducers({
  alert,
  authentication,
  form: formReducer,
  registration,
  viewCategoryReducer,
  editCategoryReducer,
  deleteCategoryReducer,
});

export default rootReducer;
