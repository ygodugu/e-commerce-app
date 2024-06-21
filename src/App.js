import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import CategoriesPage from './pages/CategoriesPage';
import CartDetails from './pages/CartDetailes';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/Login' && location.pathname !== '/Register';

  return (
    <div>
      {showNavbar && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/categoriespage" element={<CategoriesPage />} />
          <Route path="/cartdetails" element={<CartDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      {showNavbar && <Footer />}

    </div>
  );
}

export default App;
