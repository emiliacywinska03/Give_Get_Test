// src/App.tsx

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CreateListing from './pages/CreateListing';
import LoginAndRegister from './pages/LoginAndRegister';
import BrowseListings from './pages/BrowseListings';
import ListingDetails from './pages/ListingDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/listings/create" element={<CreateListing />} />
        <Route path="/account" element={<LoginAndRegister />} />
        <Route path="/listings" element={<BrowseListings />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
