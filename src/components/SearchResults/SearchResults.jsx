import './SearchResults.css';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';

function SearchResults({ articles, onSaveArticle, savedArticles, onDeleteArticle, isHomePage }) {

const [visibleCards, setVisibleCards] = useState(3);

  if (!articles || articles.length === 0) {
    return (
      <div className="search-results">
        <p className="search-results__not-found">Nothing found</p>
        <p className="search-results__message">
          Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <div className="search-results__cards">
        {articles.slice(0, visibleCards).map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            onSave={onSaveArticle}
            isSaved={savedArticles.some(saved => saved.url === article.url)}
            onDelete={onDeleteArticle}
            isHomePage={isHomePage}
          />
        ))}
      </div>
      <button 
      className="search-results__show-more"
      onClick={() => setVisibleCards(visibleCards + 3)}>
        Show more
      </button>
    </section>
  );
}

export default SearchResults;