import './HomePage.css';
import { useState } from 'react';
import PreLoader from '../../components/Preloader/Preloader';
import Header from '../../components/Header/Header';
import { handleServerResponse } from '../../utils/api';
import { apiKey } from '../../utils/constants';
import SearchResults from '../../components/SearchResults/SearchResults';

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);
    setHasSearched(true);

    const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const to = new Date().toISOString();
    const pageSize = 100;

    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}`;

    return fetch(url)
      .then(handleServerResponse)
      .then((data) => {
        setSearchResults(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setIsLoading(false);
      });
  };

  const handleSave = (article) => {
    setSavedArticles(prev => [...prev, article]);
  };

const handleDelete = (article) => {
  setSavedArticles(prev => prev.filter(saved => saved.url !== article.url));
};

  return (
    <main className="home-page">
      <Header onSearch={handleSearch} />

      {hasSearched && (
        isLoading ? (
          <PreLoader />
        ) : (
          <SearchResults
            articles={searchResults}
            onSaveArticle={handleSave}
            savedArticles={savedArticles}
            onDeleteArticle={handleDelete}
          />
        )
      )}
    </main>
  );
}


export default HomePage;
