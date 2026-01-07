import './SavedNewsPage.css';
import NewsCard from '../../components/NewsCard/NewsCard';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function SavedNewsPage({ savedArticles = [], onDelete }) {
  const { currentUser } = useContext(CurrentUserContext);
  const uniqueKeywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ];
  return (
    <main className="saved-news-page">
      <section className="saved-news-page__header">
        <p className="saved-news-page__subtitle">Saved articles</p>
        <h1 className="saved-news-page__title">{`${currentUser?.name}, You have ${savedArticles.length} saved articles`}</h1>
        <p className="saved-news-page__info">
          By keywords: {uniqueKeywords.join(', ')}{' '}
          {uniqueKeywords.length > 2
            ? `and ${uniqueKeywords.length - 2} others`
            : ''}
        </p>
      </section>

      <section className="saved-news-page__results">
        <div className="saved-news-page__cards">
          {savedArticles.map((article, index) => (
            console.log(savedArticles),
            <NewsCard
              key={index}
              article={article}
              isSaved={true}
              showDeleteButton={true}
              onDelete={onDelete}
              isHomePage={false}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedNewsPage;
