import { handleServerResponse } from './api';
import { BASE_URL } from './constants';

export const register = (name, email, password) => {
  console.log('Data being sent to server:', { name, email, password });
  return fetch(`${BASE_URL}/api/auth/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  }).then(handleServerResponse);
};

export const login = (email, password) => fetch(`${BASE_URL}/api/auth/signin`, {method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) }).then(handleServerResponse);

export const checkToken = (token) => fetch(`${BASE_URL}/api/auth/user`, { method: 'GET', headers: { Accept: 'application/json', 'Content-Type': 'application/json', authorization: `Bearer ${token}` } }).then(handleServerResponse);
