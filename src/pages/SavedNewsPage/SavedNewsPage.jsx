import './SavedNewsPage.css';
import NewsCard from '../../components/NewsCard/NewsCard';

function SavedNewsPage({ savedArticles = [] }) {
  return (
    <main className="saved-news-page">
      <section className="saved-news-page__header">
        <p className="saved-news-page__subtitle">Saved articles</p>
        <h1 className="saved-news-page__title">Your saved articles</h1>
        <p className="saved-news-page__info">
          By keywords: {savedArticles.length} saved articles
        </p>
      </section>

      <section className="saved-news-page__results">
        <div className="saved-news-page__cards">
          {savedArticles.map((article, index) => (
            <NewsCard key ={index} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedNewsPage;
