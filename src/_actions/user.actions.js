// @flow
import axios from "axios";

import { userConstants } from "_constants/user.constants";
import { registeruserAPIcall, loginuserAPIcall } from "_services/user.services";
import * as alertActions from "_actions/alert.actions";
import { history } from "_helpers/history";

export function register(user) {
  return dispatch => {
    dispatch(request(user));
    return registeruserAPIcall(user).then(
      user => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", error.data);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
// export const userActions = {
//   // login,
//   // logout,
//   register
// };

// export default register;

// const apiUrl = "http://127.0.0.1:5000/api/v1";
// export function successfulRegister(user) {
//   return {
//     type: userConstants.REGISTER_SUCCESS,
//     payload: user
//   };
// }

// export function failedRegister(error) {
//   return {
//     type: userConstants.REGISTER_FAILURE,
//     payload: error
//   };
// }

// export function register(values) {
//   return function(dispatch) {
//     return axios
//       .post(`${apiUrl}/auth/register/`, values)
//       .then(response => {
//         // const data = response.json();
//         dispatch(successfulRegister(response.data.message));
//       })
//       .catch(xhr => {
//         dispatch(failedRegister(xhr));
//         throw xhr;
//       });
//   };
// }

export function login(user) {
  return dispatch => {
    dispatch(request(user));
    return loginuserAPIcall(user.username, user.password).then(
      response => {
        dispatch(success(response.data));
        localStorage.setItem("token", response.data.access_token);
        console.log(
          "???????????????????????????",
          localStorage.getItem("token")
        );
        history.push("/dashboard");
        dispatch(alertActions.success("Logged in successfully"));
      },
      error => {
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%", error.data);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(data) {
    return { type: userConstants.LOGIN_SUCCESS, data };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
