import './Navigation.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Navigation({ onOpenLoginModal, isOnSavedPage }) {
  const { currentUser, isLoggedIn, setIsLoggedIn, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('jwt');
    navigate('/');
  };
    
  return (
    <nav className={`navigation ${isOnSavedPage ? 'navigation--saved-page': ''}`}>
      <Link to="/" className="navigation__logo">
        NewsExplorer
      </Link>
      
      <Link to="/" className="navigation__link navigation__link_active">
        Home
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/saved-news" className="navigation__link">
            Saved News
          </Link>
          
          <button 
            type="button" 
            className="navigation__user-button"
            onClick={handleSignOut}
          >
            {currentUser?.name || 'User'}
            <img
              src="/assets/images/logout.png"
              alt="Logout"
              className="navigation__user-icon"
            />
          </button>
        </>
      )}

      {!isLoggedIn && (
        <button 
          type="button" 
          className="navigation__signin-button"
          onClick={onOpenLoginModal}
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navigation;