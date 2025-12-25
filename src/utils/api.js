import { BASE_URL } from './constants';

// eslint-disable-next-line arrow-body-style
export const handleServerResponse = (res) => {
  return res
    .json()
    .then((data) => {
      if (!res.ok) {
        const error = new Error(data.message || `Error: ${res.status}`);
        error.status = res.status;
        error.data = data;
        error.validation = data.validation;
        throw error;
      }
      return data;
    })
    .catch((parseError) => {
      if (parseError.status) {
        throw parseError;
      }
      if (res.ok) {
        const error = new Error(
          'Server returned invalid JSON for successful response',
        );
        error.status = res.status;
        throw error;
      } else {
        const error = new Error(`Server error: ${res.status}`);
        error.status = res.status;
        throw error;
      }
    });
};

export const searchNews = async (query) => {
   return request(
    `${BASE_URL}/api/news?q=${encodeURIComponent(query)}&pageSize=100`
  );
};

export function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

const getSavedArticles = (token) => {
  return request(`${BASE_URL}/api/articles`, { method: 'GET', headers: { Authorization: `Bearer ${token}` } });
};

const saveArticle = (articleData, token) => {
  return request(`${BASE_URL}/api/articles`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(articleData),
  });
};

const deleteArticle = (id, token) => {
  return request(`${BASE_URL}/api/articles/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getCurrentUser = (token) => {
  return request(`${BASE_URL}/api/user/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export { getSavedArticles, saveArticle, deleteArticle, getCurrentUser };
