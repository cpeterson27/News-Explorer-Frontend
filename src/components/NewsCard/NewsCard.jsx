import './NewsCard.css';

function NewsCard({
  article,
  onSave,
  onDelete,
  isSaved,
  isHomePage,
  showDeleteButton = false,
}) {
 const handleSaveClick = () => {
  if (showDeleteButton) {
    if (article._id) {
      onDelete(article);
    } else {
      console.error('Cannot delete article: no _id found');
    }
  } else {
    onSave(article);
  }
};

  return (
    <article className="news-card">
   <img
  src={article.urlToImage || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="272"%3E%3Crect width="400" height="272" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="18" fill="%23999"%3ENo Image Available%3C/text%3E%3C/svg%3E'}
  alt={article.title}
  className="news-card__image"
  onError={(e) => {
    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="272"%3E%3Crect width="400" height="272" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="18" fill="%23999"%3ENo Image Available%3C/text%3E%3C/svg%3E';
  }}
/>

      <button
        className={`news-card__save-button ${isSaved && !showDeleteButton ? 'news-card__save-button_active' : ''} ${showDeleteButton ? 'news-card__delete-button' : ''}`}
        onClick={handleSaveClick}
        aria-label={isSaved ? 'Remove from saved' : 'Save article'}
      ></button>

      {!isHomePage && (
  <span className="news-card__keyword">{article.keyword}</span>
)}


      <div className="news-card__content">
        <time className="news-card__date">
          {new Date(article.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>

        <h2 className="news-card__title">{article.title}</h2>

        <p className="news-card__description">{article.description}</p>

        <p className="news-card__source">
          {article.source?.name || article.source || article.author}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
