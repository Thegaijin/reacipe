import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000/api/v1/';
// const apiUrl = 'https://recipiapi.herokuapp.com/api/v1/';

const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

export function registeruserAPIcall(user) {
  return axios.post(`${apiUrl}auth/register/`, user);
}

export function loginuserAPIcall(username, password) {
  return axios.post(`${apiUrl}auth/login/`, { username, password });
}

export function logoutuserAPIcall() {
  return axios.delete(`${apiUrl}auth/logout/`, { headers });
}
