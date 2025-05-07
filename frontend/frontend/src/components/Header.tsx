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
        <button className="button-theme-toogle">🌙</button>
        <div className="search-bar">
          🔍<input type="text" placeholder="Szukaj..." />
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
