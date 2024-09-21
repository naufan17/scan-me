import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <div className="flex justify-center mb-2 md:mb-4">
          <p className="text-base font-medium text-cyan-800">
            Made by Naufan
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;