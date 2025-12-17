import './SavedNewsPage.css';
import NewsCard from '../../components/NewsCard/NewsCard';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {useContext} from 'react';

function SavedNewsPage({ savedArticles = [] }) {
    const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="saved-news-page">
      <section className="saved-news-page__header">
        <p className="saved-news-page__subtitle">Saved articles</p>
        <h1 className="saved-news-page__title">{`${currentUser?.name}, You have ${savedArticles.length} saved articles`}</h1>
        <p className="saved-news-page__info">
          By keywords: {savedArticles.length} saved articles
        </p>
      </section>

      <section className="saved-news-page__results">
        <div className="saved-news-page__cards">
          {savedArticles.map((article, index) => (
            <NewsCard key ={index} article={article} isSaved={true}/>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedNewsPage;
