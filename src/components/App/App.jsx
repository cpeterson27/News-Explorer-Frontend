import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import SavedNewsPage from '../../pages/SavedNewsPage/SavedNewsPage';
import Footer from '../Footer/Footer';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { CurrentUserProvider } from '../../contexts/CurrentUserContext';
import { login, register } from '../../utils/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import SuccessModal from '../SuccessModal/SuccessModal';
import {
  getSavedArticles,
  getCurrentUser,
  deleteArticle,
  saveArticle,
} from '../../utils/api';

function App() {
  const [activeModal, setActiveModal] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenLoginModal = () => {
    setActiveModal('login');
  };

  const handleCloseModal = () => {
    setActiveModal('');
    setErrorMessage('');
  };

  return (
    <CurrentUserProvider>
      <AppContent
        activeModal={activeModal}
        handleOpenLoginModal={handleOpenLoginModal}
        handleCloseModal={handleCloseModal}
        setActiveModal={setActiveModal}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </CurrentUserProvider>
  );
}

function AppContent({
  activeModal,
  setActiveModal,
  handleOpenLoginModal,
  handleCloseModal,
  setErrorMessage,
  errorMessage,
}) {
  const { setCurrentUser, setIsLoggedIn } = useContext(CurrentUserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [savedArticles, setSavedArticles] = useState([]);
  const handleLogin = async (values) => {
    try {
      const data = await login(values.email, values.password);
      localStorage.setItem('jwt', data.token);
      setCurrentUser(data.user);
      setIsLoggedIn(true);
      handleCloseModal();
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error;
    }
  };

  const handleDeleteArticle = (article) => {
    const token = localStorage.getItem('jwt');
    const articleId = article._id;

    return deleteArticle(articleId, token)
      .then(() => {
        setSavedArticles((prev) =>
          prev.filter((saved) => saved._id !== articleId),
        );
      })
      .catch((error) => {
        console.error('Error deleting article:', error);
      });
  };

  const handleSaveArticle = (article) => {
    const token = localStorage.getItem('jwt');

    return saveArticle(article, token)
      .then((savedArticle) => {
        setSavedArticles((prev) => [...prev, savedArticle]);
      })
      .catch((error) => {
        console.error('Error saving article:', error);
      });
  };

  const handleRegister = async (values) => {
    console.log('Values from form:', values);

    try {
      await register(values.name, values.email, values.password);

      setActiveModal('registration-success');
      const data = await login(values.email, values.password);
      localStorage.setItem('jwt', data.token);
      setCurrentUser(data.user);
      setIsLoggedIn(true);
      handleCloseModal();
      navigate('/saved-news');
    } catch (error) {
      console.error('Error registering user:', error);

      let message = 'Registration failed. Please try again.';

      if (error.validation && error.validation.body) {
        message = error.validation.body.message;
      } else if (error.message) {
        message = error.message;
      }
      setErrorMessage(message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      getSavedArticles(token)
        .then((articles) => {
          setSavedArticles(articles);
        })
        .catch((error) => {
          console.error('Error fetching saved articles:', error);
        });
      getCurrentUser(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error('Error fetching current user:', error);
        });
    } else {
      console.log('No token found in localStorage');
    }
  }, []);

  return (
    <div className="app">
      <Navigation
        onOpenLoginModal={handleOpenLoginModal}
        isOnSavedPage={location.pathname === '/saved-news'}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              onSave={handleSaveArticle}
              isHomePage={true}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNewsPage
              savedArticles={savedArticles}
              onDelete={handleDeleteArticle}
            />
          }
        />
      </Routes>

      <Footer isOnSavedPage={location.pathname === '/saved-news'} />

      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={handleCloseModal}
        onLogin={handleLogin}
        onSwitchToRegister={() => setActiveModal('register')}
      />

      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={handleCloseModal}
        onSwitchToLogin={() => setActiveModal('login')}
        onRegister={handleRegister}
        errorMessage={errorMessage}
      />

      <SuccessModal
        isOpen={activeModal === 'registration-success'}
        onClose={handleCloseModal}
        onSwitchToLogin={() => setActiveModal('login')}
      />
    </div>
  );
}

export default App;
