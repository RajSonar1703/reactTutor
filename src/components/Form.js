

import React, { useState, useEffect } from 'react';
import CaptchaForm from './Captcha';

const styles = {
  main: {
    backgroundColor: 'antiquewhite',
    padding: '30px',
    fontFamily: `'Segoe UI', 'Poppins', sans-serif`,
  },
  rowLayout: {
    display: 'flex',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginRight:'250px'

  },

  formContainer: {
    flex: 1,
    padding: '25px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  },
  full: {
    gridColumn: '1 / 3'
  },
  label: {
    fontWeight: '600',
    marginBottom: '3px',
    display: 'block',
    fontSize: '13.5px',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '6px 10px',
    borderRadius: '7px',
    border: '1px solid #ccc',
    fontSize: '13.5px',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    minHeight: '70px',
    padding: '8px',
    fontSize: '13.5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
    outline: 'none'
  },
  submitBtn: {
    padding: '8px 16px',
    backgroundColor: '#1890ff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    marginTop: '12px'
  }
};



export default function Form() {
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    whatsapp: '',
    email: '',
    query: ''
  });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const newCaptcha = Math.random().toString(36).substring(2, 8);
    setCaptcha(newCaptcha);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (captchaInput !== captcha) {
    alert('❌ Incorrect captcha. Please try again.');
    setCaptchaInput('');
    generateCaptcha();
    return;
  }

  const payload = {
    service_id: 'service_877qqaa',      // Replace this
    template_id: 'template_wtvo9sm',    // Replace this
    user_id: 'tFCnS8BswKbRpDKH9',         // Replace this
    template_params: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      contact: formData.contact,
      whatsapp: formData.whatsapp,
      email: formData.email,
      query: formData.query
    }
  };

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('✅ Email sent successfully!');
    } else {
      alert('❌ Email sending failed.');
    }
  } catch (err) {
    console.error('Error:', err);
    alert('❌ Something went wrong.');
  }

  setFormData({
    firstName: '',
    lastName: '',
    contact: '',
    whatsapp: '',
    email: '',
    query: ''
  });
  setCaptchaInput('');
  generateCaptcha();
};


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (captchaInput !== captcha) {
  //     alert('❌ Incorrect captcha. Please try again.');
  //     setCaptchaInput('');
  //     generateCaptcha();
  //     return;
  //   }

  //   alert('✅ Captcha verified and form submitted!');
  //   console.log('Form Data:', formData);
  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     contact: '',
  //     whatsapp: '',
  //     email: '',
  //     query: ''
  //   });
  //   setCaptchaInput('');
  //   generateCaptcha();
  // };

  return (
    <div style={styles.main}>
      <div style={styles.rowLayout}>
        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <div style={styles.grid}>
            <div>
              <label style={styles.label}>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div>
              <label style={styles.label}>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div>
              <label style={styles.label}>Contact Number</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div>
              <label style={styles.label}>Whatsapp Number</label>
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.full}>
              <label style={styles.label}>Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.full}>
              <label style={styles.label}>Query</label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </div>

            <div style={styles.full}>
              <label style={styles.label}>Captcha</label>
              <CaptchaForm
                captcha={captcha}
                input={captchaInput}
                setInput={setCaptchaInput}
              />
            </div>
          </div>

          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        </form>
  </div>
</div>

  );
}
