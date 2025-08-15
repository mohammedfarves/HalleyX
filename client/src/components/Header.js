import React from 'react';
import hallexyLogo from './hallexyLogo.png'; 
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import './Header.css';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={{ background: 'white',position:'fixed',top:"0",right:"0",left:"0", borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={hallexyLogo} alt="Hallexy Logo" style={{ width: '150px', marginBottom: '1rem' }} />

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? '✖' : '☰'} </button>


       <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>

          <Link to="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>
            Home
          </Link>
          <Link to="/products" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>
            Products
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/orders" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>
                Orders
              </Link>
              
              <Link 
                to="/cart" 
                style={{ 
                  textDecoration: 'none', 
                  color: '#4b5563', 
                  position: 'relative', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}
              >
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
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
