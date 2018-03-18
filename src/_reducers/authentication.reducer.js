import { userConstants } from '../_constants/user.constants';

const token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true, token } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
