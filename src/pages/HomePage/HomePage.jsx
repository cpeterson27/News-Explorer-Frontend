import { useState } from 'react';
import PreLoader from '../../components/Preloader/Preloader';
import Header from '../../components/Header/Header';
import { saveArticle, searchNews } from '../../utils/api';
import SearchResults from '../../components/SearchResults/SearchResults';

function HomePage({ savedArticles, setSavedArticles }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleSearch = (query) => {
    setIsLoading(true);
    setHasSearched(true);

    searchNews(query)
      .then((data) => {
        setSearchResults(data.articles);
        setIsLoading(false);
        setKeyword(query);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setIsLoading(false);
      });
  };

  const handleSave = (article) => {
    const token = localStorage.getItem('jwt');
    saveArticle({...article, keyword, source: article.source.name}, token)
      .then(() => {
        setSavedArticles((prev) => [...prev, {...article, keyword}]);
      })
      .catch((error) => {
        console.error('Error saving article:', error);
      });
  };


  return (
    <main className="home-page">
      <Header onSearch={handleSearch} />

      {hasSearched &&
        (isLoading ? (
          <PreLoader />
        ) : (
          <SearchResults
            articles={searchResults}
            onSaveArticle={handleSave}
            savedArticles={savedArticles}
            isHomePage={true}
          />
        ))}
    </main>
  );
}

export default HomePage;
