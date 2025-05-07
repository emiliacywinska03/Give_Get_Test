import React from 'react';
import './App.css'; 
import Header from './components/Header';
import MobileSidebar from './components/MobileSidebar';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <MobileSidebar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
