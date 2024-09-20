import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-t from-cyan-100 min-h-screen">
      {children}
    </div>
  )
}

export default Main;