import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-50 to-sky-50 min-h-screen">
      <main>
        {children}
      </main>
    </div>
  )
}

export default Main;