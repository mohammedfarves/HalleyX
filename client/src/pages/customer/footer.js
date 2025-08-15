import hallexyLogo from './hallexyLogo.png';
const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#4b6282ff',
      color: '#d1d5db',
      padding: '3rem 1rem',
      marginTop: '4rem',
      fontSize: '0.875rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem'
      }}>
        {/* Company Info */}
        <div>
          <div>
            <img src={hallexyLogo} alt="Hallexy Logo" style={{ width: '150px', marginBottom: '1rem' }} />
        <p>Discover amazing products at unbeatable prices. Trusted by thousands of happy customers.</p>
        </div>

          <p>Discover amazing products at unbeatable prices. Trusted by thousands of happy customers.</p>
        </div>

        {/* Customer Service */}
        <div>
          <h4 style={{ color: '#ffffff', marginBottom: '1rem' }}>Customer Service</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/contact" style={{ color: '#d1d5db', textDecoration: 'none' }}>Contact Us</a></li>
            <li><a href="/faq" style={{ color: '#d1d5db', textDecoration: 'none' }}>FAQs</a></li>
            <li><a href="/shipping" style={{ color: '#d1d5db', textDecoration: 'none' }}>Shipping & Returns</a></li>
            <li><a href="/support" style={{ color: '#d1d5db', textDecoration: 'none' }}>Support</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 style={{ color: '#ffffff', marginBottom: '1rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/about" style={{ color: '#d1d5db', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="/careers" style={{ color: '#d1d5db', textDecoration: 'none' }}>Careers</a></li>
            <li><a href="/privacy" style={{ color: '#d1d5db', textDecoration: 'none' }}>Privacy Policy</a></li>
            <li><a href="/terms" style={{ color: '#d1d5db', textDecoration: 'none' }}>Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 style={{ color: '#ffffff', marginBottom: '1rem' }}>Follow Us</h4>
          <p>Stay connected on social media:</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d1d5db' }}>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d1d5db' }}>Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d1d5db' }}>Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div style={{ textAlign: 'center', marginTop: '2rem', borderTop: '1px solid #374151', paddingTop: '1rem' }}>
        <p>&copy; 2025 HalleyX Store. All rights reserved. Made with ❤️ by Mohammed Farves</p>
      </div>
    </footer>
  );
};

export default Footer;

