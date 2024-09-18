import React from 'react';
import Header from '../components/ui/Header';

interface NotFoundProps {
  title: string;
  description: string;
}

const NotFound: React.FC<NotFoundProps> = ({ title, description }) => {
  return (
    <Header
      title={title}
      subtitle={description}
    />
  );
};

export default NotFound;