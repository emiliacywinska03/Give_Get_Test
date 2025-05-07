import React from 'react';

const MobileSidebar: React.FC = () => (
  <div className="mobile-sidebar hidden" id="mobileSidebar">
    <button className="close-button" id="closeSidebar">×</button>
    <div className="sidebar-content">
      <div className="sidebar-logo">Give&Get</div>
      <nav className="sidebar-links">
        <a href="/" className="active">Strona główna</a>
        <a href="/listings">Przeglądaj ogłoszenia</a>
        <a href="/listings/category/work">Praca</a>
        <a href="/listings/category/sales">Sprzedaż</a>
        <a href="/listings/category/help">Pomoc</a>
      </nav>
      <div className="sidebar-auth">
        <a href="/login">Zaloguj się</a>
        <a href="/register">Zarejestruj się</a>
      </div>
    </div>
  </div>
);

export default MobileSidebar;
