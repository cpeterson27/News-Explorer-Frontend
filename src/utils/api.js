import { BASE_URL } from './constants';

// eslint-disable-next-line arrow-body-style
export const handleServerResponse = (res) => {
  return res
    .json()
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

export const searchNews = async (query, from, to) => {
  const response = await fetch(
    `${BASE_URL}/news/search?q=${encodeURIComponent(query)}&from=${from}&to=${to}&pageSize=100`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch news data');
  }
  
  return response.json();
};

export function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

const getArticles = () => {
  return request(`${BASE_URL}/articles`, { method: 'GET' });
};

const saveArticle = (articleData, token) => {
  return request(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(articleData),
  });
};

const deleteArticle = (id, token) => {
  return request(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { getArticles, saveArticle, deleteArticle };
