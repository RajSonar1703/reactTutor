// import './App.css';

// import React from 'react';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Container2 from './components/Container2';
// import Container3 from './components/Container3';
// import Footer from './components/Footer';
// import Form from './components/Form';
// import Image from './components/Image';

// const styles = {
//   header:{
//     fontFamily: 'Arial, sans-serif'
//   },
//   main:{
//     marginTop:'57px'
//   },
  
//   container5:{
//     display:'flex',
//     // gap:'90px'
//     // paddingLeft:'90%',
//     // paddingRight:'90%'
//   }
// }

// const ReactutorWebsite = () => {
//   return (
//     <div style={styles.header}>
//       <Navbar />
//       <main style={styles.main}>
//         <Header />
//         <Container2 />
//         <Container3 />
//         <div style={styles.container5} >
//           <Image/>
//           <Form />
//         </div>
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default ReactutorWebsite;


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
  header: {
    fontFamily: 'Arial, sans-serif'
  },
  main: {
    marginTop: '57px'
  }
};

const ReactutorWebsite = () => {
  return (
    <div style={styles.header}>
      <Navbar />
      <main style={styles.main}>
        <Header />
        <Container2 />
        <Container3 />
        <div className="container5">
          <Image />
          <Form />
        </div>
        <Footer />
      </main>

      <style>
        {`
          .container5 {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            background-color: antiquewhite;
            padding: 20px;
            justify-content: center;
            align-items: flex-start;
          }

          @media (max-width: 992px) {
            .container5 {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ReactutorWebsite;
