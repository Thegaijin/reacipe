import { alertConstants } from "_constants/alert.constants";

export const success = message => {
  return { type: alertConstants.SUCCESS, message };
};

export const error = message => {
  return { type: alertConstants.ERROR, message };
};

export const clear = () => {
  return { type: alertConstants.CLEAR };
};

// export const alertActions = {
//   success,
//   error,
//   clear
// };
