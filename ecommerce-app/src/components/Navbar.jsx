// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const cartCount = getCartCount();

  return (
    <nav className="navbar">
      <div className="navbar-topbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" aria-label="E-Store home">
            <span className="logo-icon">🛒</span>
            <span className="logo-text">E-Store</span>
          </Link>

          <div className="location-box">
            <span className="location-label">Deliver to</span>
            <strong>India</strong>
          </div>

          <div className="search-box">
            <select className="search-category" defaultValue="All">
              <option>All</option>
              <option>Electronics</option>
              <option>Accessories</option>
            </select>
            <input
              type="text"
              className="search-input"
              placeholder="Search E-Store"
              aria-label="Search products"
            />
            <button type="button" className="search-button">Search</button>
          </div>

          <div className="navbar-auth">
            {user ? (
              <>
                <div className="user-info">
                  <span className="user-email">{user.email}</span>
                </div>
                <button onClick={handleLogout} className="btn btn-logout">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className="navbar-subnav">
        <div className="navbar-container subnav-container">
          <button className="menu-toggle menu-toggle-secondary" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            ☰ All
          </button>

          <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
            <Link to="/products" className="nav-link" onClick={() => setMenuOpen(false)}>
              Products
            </Link>

            {user && (
              <>
                <Link to="/wishlist" className="nav-link with-badge" onClick={() => setMenuOpen(false)}>
                  ❤️ Wishlist
                  {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
                </Link>

                <Link to="/cart" className="nav-link with-badge" onClick={() => setMenuOpen(false)}>
                  🛒 Cart
                  {cartCount > 0 && <span className="badge">{cartCount}</span>}
                </Link>

                <Link to="/orders" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Orders
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;