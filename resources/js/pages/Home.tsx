import React from 'react';
import Header from '../components/ui/Header';

interface HomeProps {
  title: string;
  description: string;
}

const Home: React.FC<HomeProps> = ({ title, description }) => {
  return (
    <Header
      title={title}
      subtitle={description}
    />
  );
};

export default Home;