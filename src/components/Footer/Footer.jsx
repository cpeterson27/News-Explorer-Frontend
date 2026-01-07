import './Footer.css';
import { Link } from 'react-router-dom';

function Footer({isOnSavedPage}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isOnSavedPage ? 'footer--saved-page': ''}`} >
      <div className="bio__container">
        <img
          className="bio__photo"
          src="/assets/images/cassie.jpg"
          alt="Cassie"
        />
        <div className="bio__text">
          <h2>About the author</h2>
         <p>
  I&apos;m a software engineer specializing in front‑end and UI/UX. I build clean, intuitive web applications using React, JavaScript (ES6+), HTML5, and CSS/Sass.
</p>

<p>
  With real‑world project experience at TripleTen, I know how to turn design ideas into polished, responsive, and maintainable code. I’m always learning — and ready to help you bring your next web idea to life.
</p>

        </div>
      </div>
      <div className="footer__content">
        <p className="footer__copyright">
          © {currentYear} Supersite, Powered by News API
        </p>

        <div className="footer__right">
          <nav className="footer__nav">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <a
              href="https://tripleten.com"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </nav>

          <div className="footer__social">
            <a
              href="https://github.com/cpeterson27"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/assets/images/github.png"
                alt="GitHub"
                className="footer__social-icon"
              />
            </a>
            <a
              href="https://linkedin.com"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/assets/images/LinkedIn.png"
                alt="LinkedIn"
                className="footer__social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
