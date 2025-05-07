import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CreateListing from './pages/CreateListing'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/listings/create" element={<CreateListing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
