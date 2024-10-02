import React from 'react';
import Container from './Container';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  return (
    <nav className="top-0 z-50 w-full bg-opacity-80">
      <Container>
        <div className="flex items-center justify-end">
          {/* <div className="flex items-center"> */}
            <a href="login">
              <Button
                name="Login"
              />
            </a>
          </div>
        {/* </div> */}
      </Container>
    </nav>
  )
}

export default Navbar;