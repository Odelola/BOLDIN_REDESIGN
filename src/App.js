import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Services from './components/Services';
import Work from './components/Work';
import Cta from './components/Cta';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Work />
      <Cta />
      <Newsletter />
      <Footer />
     </>
      );
}

export default App;
