import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

function Header({ onSearch }) {

  return (
    <header className="header">
      <div className="header__content">
        <section className="home-page__search">
          <h1 className="home-page__title">
            What&apos;s going on in the world?
          </h1>
          <p className="home-page__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm onSearch={onSearch} />
        </section>
      </div>
    </header>
  );
}

export default Header;
