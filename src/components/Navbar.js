// import React, { useState } from 'react';

// const styles = {
//   header: {
//     backgroundColor: '#001529',
//     padding: '16px 5%',
//     color: 'white',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1000
//   },
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexWrap: 'wrap'
//   },
//   logoWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px'
//   },
//   logoImage: {
//     height: '50px',
//     width: '100px'
//   },
//   logoText: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     lineHeight: '1'
//   },
//   nav: {
//     display: 'flex',
//     gap: '20px'
//   },
//   link: {
//     color: 'white',
//     textDecoration: 'none',
//     cursor: 'pointer'
//   },
//   hamburger: {
//     fontSize: '24px',
//     background: 'none',
//     border: 'none',
//     color: 'white',
//     cursor: 'pointer',
//     display: 'none'
//   },
//   mobileMenu: {
//     flexDirection: 'column',
//     marginTop: '10px',
//     gap: '10px'
//   }
// };

// const menuItems = ['Home', 'Courses', 'Features', 'Testimonials', 'Contact'];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <header style={styles.header}>
//         <div style={styles.container}>
//           {/* Logo */}
//           <div style={styles.logoWrapper}>
//             <img style={styles.logoImage} src="/logo3.png" alt="Reactutor Logo" />
//             <div style={styles.logoText}>Reactutor</div>
//           </div>

//           {/* Hamburger Menu for Mobile */}
//           <button
//             style={styles.hamburger}
//             className="hamburger-btn"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>

//           {/* Desktop Nav */}
//           <nav
//             style={{
//               ...styles.nav,
//               ...(menuOpen ? styles.mobileMenu : {}),
//             }}
//             className="nav-menu"
//           >
//             {menuItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={`#${item.toLowerCase()}`}
//                 style={styles.link}
//                 onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
//                 onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* Inline Responsive Style */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .hamburger-btn {
//               display: block !important;
//             }
//             .nav-menu {
//               display: ${menuOpen ? 'flex' : 'none'} !important;
//               width: 100%;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// }
import React, { useState } from 'react';

const styles = {
  header: {
    backgroundColor: '#001529',
    padding: '16px 0',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    width: '100%',
  },
  container: {
    width: '100%',
    padding: '0 0px', // no side padding
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginLeft: '0px', // explicitly no margin
  },
  logoImage: {
    height: '50px',
    width: '100px',
    marginLeft: '0px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1',
  },
  
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '6px 0',
    cursor: 'pointer',
  },
    nav: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    marginRight: '16px', // ✅ small space from right edge
  },
  hamburger: {
    fontSize: '26px',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'none',
    marginRight: '16px', // ✅ same for mobile
  },

  mobileMenu: {
    flexDirection: 'column',
    gap: '12px',
    marginTop: '10px',
    alignItems: 'flex-start',
    width: '100%',
  },
};

const menuItems = ['Home', 'Courses', 'Features', 'Testimonials', 'Contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>
          {/* Left: Logo */}
          <div style={styles.logoWrapper}>
            <img style={styles.logoImage} src="/logo3.png" alt="Reactutor Logo" />
            <div style={styles.logoText}>Reactutor</div>
          </div>

          {/* Right: Hamburger & Nav */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              className="hamburger-btn"
              style={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            <nav
              className="nav-menu"
              style={{
                ...styles.nav,
                ...(menuOpen ? styles.mobileMenu : {}),
              }}
            >
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
        </div>
      </header>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 768px) {
            .hamburger-btn {
              display: block !important;
              margin-left: auto;
            }

            .nav-menu {
              display: ${menuOpen ? 'flex' : 'none'} !important;
              background-color: #001529;
              flex-direction: column;
              align-items: flex-start;
              padding: 10px 0;
              width: 100%;
              margin-top: 10px;
            }

            .nav-menu a {
              width: 100%;
              padding-left: 10px;
            }
          }
        `}
      </style>
    </>
  );
}
