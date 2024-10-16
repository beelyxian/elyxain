import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Elyxian</h2>

    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#1A202C', // Dark gray background
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding a slight shadow
  },
  logo: {
    color: '#F56565', // Soft red color for Elyxian logo
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: '#CBD5E0', // Light gray for nav items
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  },
  navItemHover: {
    color: '#F56565', // Change to red on hover
  }
};

export default Navbar;
