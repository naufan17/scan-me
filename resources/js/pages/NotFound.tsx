import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const NotFound: React.FC = () => {
  return (
    <>
      <Header
        title='404 - Page Not Found'
        subtitle="The page you're looking for does not exist."
      />
      <Footer/>
    </>
  );
};

export default NotFound;