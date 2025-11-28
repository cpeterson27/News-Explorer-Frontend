import { BASE_URL } from './constants';

// eslint-disable-next-line arrow-body-style
export const handleServerResponse = (res) => {
  return res.json()
    .then((data) => {
      if (!res.ok) {
        const error = new Error(data.message || `Error: ${res.status}`);
        error.status = res.status;
        throw error;
      }
      return data;
    })
    .catch((parseError) => {
      if (parseError.status) {
        throw parseError;
      }
      if (res.ok) {
        const error = new Error('Server returned invalid JSON for successful response');
        error.status = res.status;
        throw error;
      } else {
        const error = new Error(`Server error: ${res.status}`);
        error.status = res.status;
        throw error;
      }
    });
};

export function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

const getArticles = () => request(`${BASE_URL}/articles`, { method: 'GET' });

const saveArticle = (articleData, token) => request(`${BASE_URL}/articles`, { method: 'POST', headers: { authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify(articleData) });

const deleteArticle = (id, token) => { request(`${BASE_URL}/articles/${id}`, { method: 'DELETE', headers: { authorization: `Bearer ${token}` } }); };

export { getArticles, saveArticle, deleteArticle };
