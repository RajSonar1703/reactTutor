import React from 'react';

const style = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  @media (max-width: 768px) {
    .hero-section {
      flex-direction: column;
      padding: 40px 5%;
      text-align: center;
    }

    .hero-content, .hero-image {
      flex: 1 1 100%;
      max-width: 100% !important;
    }

    .hero-content h1 {
      font-size: 2rem !important;
    }

    .hero-content p {
      font-size: 1rem !important;
    }

    .hero-buttons {
      justify-content: center;
      flex-direction: column;
      gap: 15px;
    }

    .hero-image img {
      max-width: 90% !important;
    }
  }
`;

const themeColors = {
  primary: '#1890ff',
  accent: '#52c41a',
  dark: '#001529',
  light: '#f0f2f5'
};

export default function Header() {
  return (
    <div>
      <style>{style}</style>

      <section
        className="hero-section"
        style={{
          background: `linear-gradient(135deg, ${themeColors.dark}, ${themeColors.primary})`,
          color: 'white',
          padding: '50px 5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          minHeight: '95vh',
        }}
      >
        {/* Left: Text Content */}
        <div className="hero-content" style={{ flex: '1 1 500px', maxWidth: '600px' }}>
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '6px 12px',
              borderRadius: '20px',
              display: 'inline-block',
              marginBottom: '20px',
              fontSize: '0.9rem'
            }}
          >
            🔴 Live Now: Free React Workshop!
          </div>

          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            🚀 Master React with Real Projects & Live Support
          </h1>

          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Join <strong>Reactutor</strong>'s expert-led sessions, hands-on projects, and vibrant
            community to become a job-ready React developer.
          </p>

          <div
            className="hero-buttons"
            style={{
              marginTop: '30px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
            }}
          >
            <button
              style={{
                padding: '14px 30px',
                backgroundColor: themeColors.accent,
                border: 'none',
                color: 'white',
                fontSize: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#3da516')}
              onMouseOut={(e) => (e.target.style.backgroundColor = themeColors.accent)}
            >
              🚀 Get Started
            </button>

            <button
              style={{
                padding: '14px 30px',
                border: '2px solid white',
                color: 'white',
                fontSize: '1rem',
                background: 'transparent',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              🎓 Browse Courses
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="hero-image"
          style={{
            flex: '1 1 400px',
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          <img
            src="/study.jpg"
            alt="Live Study Illustration"
            style={{
              maxWidth: '400px',
              height: 'auto',
              animation: 'float 2s ease-in-out infinite',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          />
        </div>
      </section>
    </div>
  );
}
