import React from 'react'
const themeColors = {
  primary: '#1890ff',
  accent: '#52c41a',
  dark: '#001529',
  light: '#f0f2f5'
};

const styles = {
    footer1:{
        backgroundColor: themeColors.dark, 
        color: 'white', 
        padding: '60px 5%'
    },
    footer2: {
        display: 'flex', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap', 
        gap: '20px'
    },
    icons :{
        fontSize: '24px'
    },
}

export default function Footer() {
  return (
    <div>
      <section style={styles.footer1}>
          <div style={styles.footer2}>
            <div>
              <h3>Reactutor</h3>
              <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
              <p>info@reactutor.com | 1800 123 4567</p>
            </div>
            <div>
              <p>Follow us on:</p>
              <div style={styles.icons}><i className="bi bi-instagram"></i> <i className="bi bi-whatsapp"></i> <i className="bi bi-facebook"></i></div>
            </div>
          </div>
          <hr style={{ margin: '30px 0', borderColor: 'rgba(255,255,255,0.2)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>© 2025 Reactutor. All rights reserved.</p>
            <div style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '20px' }}>
              <span>Privacy Policy</span>
              <span>Terms</span>
            </div>
          </div>
        </section>
    </div>
  )
}
