import React from 'react';
import Header from '../components/layout/Header';
import OptionQR from '../components/base/home/optionQR';

const Home: React.FC = () => {
  return (
    <>
      <Header
        title='Scan Me'
        subtitle='Create and Customize QR Code'
      />
      <OptionQR/>
    </>
  );
};

export default Home;