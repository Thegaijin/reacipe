import { authHeader } from "_helpers/auth-header";
import axios from "axios";

export const userService = {
  register
};

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch("/users/register", requestOptions).then(handleResponse);
}
