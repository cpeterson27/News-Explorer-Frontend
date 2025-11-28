import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        Home
      </Link>
      <Link to="/saved-news" className="navigation__link">
        Saved News
      </Link>
      <button 
      type = "submit"
      className = "navigation__button">
        Sign In
      </button>
    </nav>
  );
}

export default Navigation;