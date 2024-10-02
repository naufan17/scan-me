import React from 'react';
import Container from './Container';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <div className="max-w-xl mt-12 sm:mt-18 md:mx-auto sm:text-center lg:max-w-2xl">
        {title && (
          <h2 className="mb-8 text-3xl font-bold leading-none tracking-tight text-cyan-800 sm:text-4xl md:text-5xl md:mx-auto">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-base text-cyan-700 sm:text-lg md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </Container>
  )
}

export default Header;