import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
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

function App() {
  const [activeModal, setActiveModal] = useState('');

  const handleOpenLoginModal = () => {
    setActiveModal('login');
  };

  const handleCloseModal = () => {
    setActiveModal('');
  };

  return (
    <CurrentUserProvider>
      <AppContent
        activeModal={activeModal}
        handleOpenLoginModal={handleOpenLoginModal}
        handleCloseModal={handleCloseModal}
        setActiveModal={setActiveModal}
      />
    </CurrentUserProvider>
  );
}

function AppContent({
  activeModal,
  setActiveModal,
  handleOpenLoginModal,
  handleCloseModal,
}) {
  const { setCurrentUser, setIsLoggedIn } = useContext(CurrentUserContext);
  const location = useLocation();
  const navigate = useNavigate();

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

const handleRegister = async (values) => {
    console.log('Values from form:', values); // Add this line

  try {
    await register(values.name, values.email, values.password);
    const data = await login(values.email, values.password);
    localStorage.setItem('jwt', data.token);
    setCurrentUser(data.user);
    setIsLoggedIn(true);
    handleCloseModal();
    navigate('/saved-news');
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

  return (
    <div className="app">
      <Navigation
        onOpenLoginModal={handleOpenLoginModal}
        isOnSavedPage={location.pathname === '/saved-news'}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saved-news" element={<SavedNewsPage />} />
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
      />
    </div>
  );
}

export default App;
