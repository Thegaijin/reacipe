import axios from 'axios';

const apiUrl = 'https://recipiapi.herokuapp.com';
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

export function registeruserAPIcall(user) {
  return axios.post(`${apiUrl}auth/register/`, user);
}

export function loginuserAPIcall(username, password) {
  return axios.post(`${apiUrl}auth/login/`, { username, password });
}

export function logoutuserAPIcall() {
  console.log("Let's log out^>^>^>^>^>^>^>^>^>^>^>^>^>^>");
  return axios.delete(`${apiUrl}auth/logout/`, { headers });
}
