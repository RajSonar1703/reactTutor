

import React from 'react';
const styles = {
  header: {
    backgroundColor: '#001529',
    padding: '16px 5%',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    marginLeft:'15px' ,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logoImage: {
    height: '50px',
    width:'100px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1'
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

const menuItems = ['Home', 'Courses', 'Features', 'Testimonials', 'Contact'];

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoWrapper}>
          <img style={styles.logoImage} src="/logo3.png" alt="Reactutor Logo" />
          <div style={styles.logoText}>Reactutor</div>
        </div>

        <nav style={styles.nav}>
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              style={styles.link}
              onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
              onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

