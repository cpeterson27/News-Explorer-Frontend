import './Navigation.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Navigation({ onOpenLoginModal, isOnSavedPage }) {
  const { currentUser, isLoggedIn, setIsLoggedIn, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('jwt');
    navigate('/');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
  return (
    <nav className={`navigation ${isOnSavedPage ? 'navigation--saved-page': ''} ${isMenuOpen ? 'navigation__mobile-menu_opened' : ''}`}>
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

      <button 
        className={`navigation__menu-btn ${isOnSavedPage ? 'navigation__menu-btn--saved' : ''}`}
        onClick={handleMenuToggle}
      >
        <span className="navigation__menu-line"></span>
        <span className="navigation__menu-line"></span>
      </button>

      <div className={`navigation__mobile-menu ${isMenuOpen ? 'navigation__mobile-menu_opened' : ''} ${isOnSavedPage ? 'navigation__mobile-menu--saved' : ''}`}>
        <Link to="/" className="navigation__mobile-link" onClick={handleMenuToggle}>
          Home
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/saved-news" className="navigation__mobile-link" onClick={handleMenuToggle}>
              Saved News
            </Link>
            
            <button 
              type="button" 
              className="navigation__mobile-signout"
              onClick={() => {
                handleSignOut();
                handleMenuToggle();
              }}
            >
              {currentUser?.name || 'User'}
            </button>
          </>
        )}

        {!isLoggedIn && (
          <button 
            type="button" 
            className="navigation__mobile-signin"
            onClick={() => {
              onOpenLoginModal();
              handleMenuToggle();
            }}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;