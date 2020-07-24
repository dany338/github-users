import { API_HOST } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  const newApiHeaders = new Headers();
  newApiHeaders.append("Content-Type", "application/json");
  newApiHeaders.append("Accept", "application/json");
  return {
    method,
    headers: newApiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiGithubUsers = {
  getUsers: async () => {
    try {
      const response = await fetch(`${API_HOST}${endpoints.users.get}`, fetchParams('GET'));
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  },
  getUserByUsername: async (username) => {
    try {
      const response = await fetch(`${API_HOST}${endpoints.users.get}/${username}`, fetchParams('GET'));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  }
};

export default apiGithubUsers;
