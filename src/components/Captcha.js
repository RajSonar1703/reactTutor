
import React from 'react';

export default function CaptchaForm({ captcha, input, setInput }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '10px'
    }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter captcha"
        style={{
          padding: '10px',
          flex: 1,
          boxSizing: 'border-box',
          borderRadius:'7px',
          border:'2px solid #ccc'
        }}
        required
      />
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '1.2rem',
          letterSpacing: '3px',
          backgroundColor: '#f4f4f4',
          padding: '10px 16px',
          borderRadius: '4px',
          whiteSpace: 'nowrap'
        }}
      >
        {captcha}
      </div>
    </div>
  );
}
