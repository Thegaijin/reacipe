// @flow
import { userConstants } from '../_constants/user.constants';
import {
  registeruserAPIcall,
  loginuserAPIcall,
  logoutuserAPIcall,
} from '../_services/user.services';
import * as alertActions from '../_actions/alert.actions';
import { history } from '../_helpers/history';

export function register(user) {
  function request() {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success() {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure() {
    return { type: userConstants.REGISTER_FAILURE, user };
  }

  return (dispatch) => {
    dispatch(request(user));
    return registeruserAPIcall(user).then(
      () => {
        dispatch(success());
        history.push('/login');
        dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      },
    );
  };
}

export function login(user) {
  function request() {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success() {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure() {
    return { type: userConstants.LOGIN_FAILURE, user };
  }

  return (dispatch) => {
    dispatch(request(user));
    return loginuserAPIcall(user.username, user.password)
      .then(
        (response) => {
          dispatch(success(response.data));
          localStorage.setItem('token', response.data.access_token);
          dispatch(alertActions.success(response.data.message));
        },
        (error) => {
          console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', error.data);
          dispatch(failure(error));
          // dispatch(alertActions.error(error));
        },
      )
      .then(() => {
        window.location.href = '/dashboard';
      });
  };
}

export function logout() {
  function request() {
    return { type: userConstants.LOGOUT_REQUEST };
  }
  function success(response) {
    return { type: userConstants.LOGOUT_SUCCESS };
  }
  function failure() {
    return { type: userConstants.LOGOUT_FAILURE };
  }

  return (dispatch) => {
    dispatch(request());
    return logoutuserAPIcall().then(
      (response) => {
        dispatch(success(response.data));
        localStorage.clear();
        history.push('/login');
        dispatch(alertActions.success(response.data.message));
      },
      (error) => {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%', error.data);
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      },
    );
  };
}
