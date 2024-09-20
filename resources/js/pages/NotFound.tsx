import React from 'react';
import Header from '../components/layout/Header';

const NotFound: React.FC = () => {
  return (
    <Header
      title='404 - Page Not Found'
      subtitle="The page you're looking for does not exist."
    />
  );
};

export default NotFound;