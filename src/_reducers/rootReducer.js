import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { alert } from "_reducers/alert.reducer";
import { authentication } from "_reducers/authentication.reducer";
import { registration } from "_reducers/registration.reducer";
import { users } from "_reducers/users.reducer";

const rootReducer = combineReducers({
  alert,
  authentication,
  form: formReducer,
  registration
});

export default rootReducer;
