import axios from "axios";

const apiUrl = "http://127.0.0.1:5000/api/v1/";

export function registeruserAPIcall(user) {
  return axios.post(`${apiUrl}auth/register/`, user);
}

export function loginuserAPIcall(username, password) {
  return axios.post(`${apiUrl}auth/login/`, { username, password });
}
