import React from 'react';
import Header from '../components/layout/Header';
import OptionQR from '../components/base/home/optionQR';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header
        title='Scan Me'
        subtitle='Create and Customize QR Code'
      />
      <OptionQR/>
      <Footer/>
    </>
  );
};

export default Home;