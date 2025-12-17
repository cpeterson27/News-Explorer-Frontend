import './NewsCard.css';

function NewsCard({ article, onSave, onDelete, isSaved, showDeleteButton = false }) {
  const handleSaveClick = () => {
    if (isSaved) {
      onDelete(article);
    } else {
      onSave(article);
    }
  };

  return (
    <article className="news-card">
      <img 
        src={article.urlToImage} 
        alt={article.title}
        className="news-card__image"
      />
      
      <button 
        className={`news-card__save-button ${isSaved && !showDeleteButton ? 'news-card__save-button_active' : ''} ${showDeleteButton ? 'news-card__delete-button' : ''}`}
        onClick={handleSaveClick}
        aria-label={isSaved ? 'Remove from saved' : 'Save article'}
      >        
      </button>

      <span className="news-card__keyword">{article.keyword}</span>

      <div className="news-card__content">
        <time className="news-card__date">
          {new Date(article.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </time>
        
        <h2 className="news-card__title">{article.title}</h2>
        
        <p className="news-card__description">{article.description}</p>
        
        <p className="news-card__source">{article.source?.name || article.source || article.author}</p>
      </div>
    </article>
  );
}

export default NewsCard;