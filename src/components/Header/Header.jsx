import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo">NewsExplorer</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
