import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SavedNewsPage from '../../pages/SavedNewsPage/SavedNewsPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/saved-news" element={<SavedNewsPage />} />
    </Routes>
  );
}

export default App;
