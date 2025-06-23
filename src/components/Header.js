

// import React from 'react';

// const themeColors = {
//   primary: '#1890ff',
//   accent: '#52c41a',
//   dark: '#001529',
//   light: '#f0f2f5'
// };

// export default function Header() {
//   return (
//     <div>
//       <section
//         style={{
//           background: `linear-gradient(135deg, ${themeColors.dark}, ${themeColors.primary})`,
//           color: 'white',
//           padding: '50px 5%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//           minHeight: '82vh'
//         }}
//       >
//         {/* Text Content */}
//         <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
//           <div
//             style={{
//               backgroundColor: 'rgba(255,255,255,0.1)',
//               padding: '6px 12px',
//               borderRadius: '20px',
//               display: 'inline-block',
//               marginBottom: '20px',
//               fontSize: '0.9rem'
//             }}
//           >
//             🔥 New! Enrollments Open for June 2025 Batch
//           </div>
//           <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
//             🚀 Master React with Real Projects & Live Support
//           </h1>
//           <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
//             Join <strong>Reactutor</strong>'s expert-led sessions, hands-on projects, and vibrant community to become a job-ready React developer.
//           </p>
//           <div style={{ marginTop: '30px' }}>
//             <button
//               style={{
//                 marginRight: '15px',
//                 padding: '14px 30px',
//                 backgroundColor: themeColors.accent,
//                 border: 'none',
//                 color: 'white',
//                 fontSize: '1rem',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 transition: 'background 0.3s ease'
//               }}
//               onMouseOver={e => e.target.style.backgroundColor = '#3da516'}
//               onMouseOut={e => e.target.style.backgroundColor = themeColors.accent}
//             >
//               🚀 Get Started
//             </button>
//             <button
//               style={{
//                 padding: '14px 30px',
//                 border: '2px solid white',
//                 color: 'white',
//                 fontSize: '1rem',
//                 background: 'transparent',
//                 borderRadius: '8px',
//                 cursor: 'pointer'
//               }}
//             >
//               🎓 Browse Courses
//             </button>
//           </div>
//         </div>

//         {/* Illustration or Image */}
//         <div style={{ flex: '1 1 400px', marginTop: '40px', textAlign: 'center' }}>
//           <img
//             src="https://www.svgrepo.com/show/331370/online-learning.svg"
//             alt="Learning Illustration"
//             style={{ maxWidth: '100%', height: 'auto' }}
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react';

// Add this style block globally or in a CSS file
const style = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
`;

const themeColors = {
  primary: '#1890ff',
  accent: '#52c41a',
  dark: '#001529',
  light: '#f0f2f5'
};

const styles ={
    header1:{
        background: `linear-gradient(135deg, ${themeColors.dark}, ${themeColors.primary})`,
        color: 'white',
        padding: '50px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        minHeight: '95vh'
    },
    title1:{
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '6px 12px',
        borderRadius: '20px',
        display: 'inline-block',
        marginBottom: '20px',
        fontSize: '0.9rem'
    },
    container1:{ 
      flex: '1 1 500px',
      maxWidth: '600px' 
    },
    title2:{ 
      fontSize: '3rem', 
      marginBottom: '20px' 
    },
    para1:{ 
      fontSize: '1.2rem', 
      lineHeight: '1.6' 
    },
    btn1:{
      marginRight: '15px',
      padding: '14px 30px',
      backgroundColor: themeColors.accent,
      border: 'none',
      color: 'white',
      fontSize: '1rem',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    btn2:{
                padding: '14px 30px',
                border: '2px solid white',
                color: 'white',
                fontSize: '1rem',
                background: 'transparent',
                borderRadius: '8px',
                cursor: 'pointer'
              }
}

export default function Header() {
  return (
    <div style={styles.main}>
      <style>{style}</style> 
      {/* header1 */}
      <section style={styles.header1}>

        {/* container1 */}
        <div style={styles.container1}>
          {/* title1 */}
          <div style={styles.title1}>
            🔴 Live Now: Free React Workshop!
          </div>
          {/* title2 */}
          <h1 style={styles.title2}>
            🚀 Master React with Real Projects & Live Support
          </h1>
          {/* para1 */}
          <p style={styles.para1}>
            Join <strong>Reactutor</strong>'s expert-led sessions, hands-on projects, and vibrant community to become a job-ready React developer.
          </p>
          <div style={{ marginTop: '30px' }}>
            {/* btn1 */}
            <button
              style={styles.btn1}
              onMouseOver={e => e.target.style.backgroundColor = '#3da516'}
              onMouseOut={e => e.target.style.backgroundColor = themeColors.accent}
            >
              🚀 Get Started
            </button>
            {/* btn2 */}
            <button style={styles.btn2}>
              🎓 Browse Courses
            </button>
          </div>
        </div>

        {/* Animated Illustration */}
        <div style={{ flex: '1 1 400px', marginTop: '40px', textAlign: 'center' }}>
          <img
            src="/study.jpg"
            alt="Live Study Illustration"
            style={{
              maxWidth: '400px',
              height: 'auto',
              animation: 'float 2s ease-in-out infinite',
              border:'2px 2px solid black',
              borderRadius:'10px',
            }}
          />
        </div>
      </section>
    </div>
  );
}
