import React, { useState } from 'react';
import hallexyLogo from './hallexyLogo.png'; 
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={{ background: 'white', position: 'fixed', top: "0", right: "0", left: "0", borderBottom: '1px solid #e5e7eb', padding: '1rem 0', zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <img src={hallexyLogo} alt="Hallexy Logo" style={{ width: '150px', marginBottom: '1rem' }} />

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className="nav-links" style={{ display: menuOpen ? 'flex' : '', flexDirection: menuOpen ? 'column' : 'row', gap: menuOpen ? '1rem' : '2rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Home</Link>
            <Link to="/products" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Products</Link>

            {isAuthenticated ? (
              <>
                <Link to="/orders" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Orders</Link>
                
                <Link to="/cart" style={{ textDecoration: 'none', color: '#4b5563', position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <ShoppingCart size={20} />
                  {getCartItemsCount() > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      background: '#ef4444',
                      color: 'white',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {getCartItemsCount()}
                    </span>
                  )}
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <User size={16} />
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {user?.firstName} {user?.lastName}
                    </span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div style={{ display: 'flex', gap: '1rem', flexDirection: menuOpen ? 'column' : 'row' }}>
                <Link to="/login" className="btn btn-outline">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu" style={{ display: 'flex', flexDirection: 'column', background: 'white', padding: '1rem', gap: '1rem' }}>
          {/* Duplicate Nav links here for mobile */}
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          {isAuthenticated ? (
            <>
              <Link to="/orders" onClick={() => setMenuOpen(false)}>Orders</Link>
              <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart ({getCartItemsCount()})</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}

      {/* Styles for responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav .nav-links {
            display: none;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
