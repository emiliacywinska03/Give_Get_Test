import React from 'react';

const Header: React.FC = () => (
  <header>
    <div className="container header-content">
      <div className="left">
        <button className="menu-button">☰</button>
        <a href="/" className="logo">Give&Get</a>
        <nav className="nav-links">
          <a href="/" className="active">Strona główna</a>
          <a href="/listings">Przeglądaj ogłoszenia</a>
          <a href="/listings/category/work">Praca</a>
          <a href="/listings/category/sales">Sprzedaż</a>
          <a href="/listings/category/help">Pomoc</a>
        </nav>
      </div>
      <div className="right">
      <button className="button-theme-toogle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </button>
        <div className="search-bar">
          <input type="text" placeholder="Szukaj..." />
        </div>
        <div className="auth-buttons">
          <a href="/login" className="login-button">Zaloguj się</a>
          <a href="/register" className="login-button">Zarejestruj się</a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
