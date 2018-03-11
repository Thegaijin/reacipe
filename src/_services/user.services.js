import { authHeader } from "../_helpers/auth-header";
import axios from "axios";

// export const userService = {
//   // login,
//   // logout,
//   register
//   // getAll,
//   // getById,
//   // update,
//   // delete: _delete
// };

const apiUrl = "http://127.0.0.1:5000/api/v1/";

export function registerservice(user) {
  // console.log("--------------------------------", user);
  // const wow = axios.post(`${apiUrl}/auth/register/`, user);
  // console.log("################################", wow);
  return axios.post(`${apiUrl}auth/register/`, user);
}
// function handleResponse(response) {
//   response => {
//     console.log("*******************************", response);
//     return response.data;
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

export function loggingIn(user) {
  return axios.post(`${apiUrl}auth/login/`, user);
}
