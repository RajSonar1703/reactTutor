import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Footer from './components/Footer';
import Form from './components/Form';
import Image from './components/Image';

const styles = {
  header:{
    fontFamily: 'Arial, sans-serif'
  },
  main:{
    marginTop:'57px'
  },
  
  container5:{
    display:'flex',
    // gap:'90px'
    // paddingLeft:'90%',
    // paddingRight:'90%'
  }
}

const ReactutorWebsite = () => {
  return (
    <div style={styles.header}>
      <Navbar />
      <main style={styles.main}>
        <Header />
        <Container2 />
        <Container3 />
        <div style={styles.container5} >
          <Image/>
          <Form />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ReactutorWebsite;