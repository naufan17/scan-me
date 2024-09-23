import React from 'react';
import Container from '../../layout/Container';

interface CardOptionQRProps {
  optionQRData: { icon: string; label: string }[];
  onClickOption: (label: string) => void;
}

const cardOptionQR: React.FC<CardOptionQRProps> = ({ optionQRData, onClickOption }) => {
  return (
    <Container>
      <div className="md:mx-16">
        <div className="grid gap-3 md:gap-5 grid-cols-3  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {optionQRData.map((item, index) => (
            <div 
              key={index} 
              className="p-3 md:p-4 bg-gradient-to-b from-cyan-50 duration-300 transform border-2 border-cyan-100 rounded-md hover:border-cyan-700 cursor-pointer"
              onClick={() => onClickOption(item.label)}
            >
              <div className="flex mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10 text-base sm:text-xl items-center justify-center rounded-full bg-cyan-100">
                <i className={`${item.icon} text-cyan-700`}></i>
              </div>
              <h6 className="text-sm sm:text-base font-medium text-center text-cyan-800">
                {item.label}
              </h6>
            </div>          
          ))}
        </div>
      </div>
    </Container>
  );
};

export default cardOptionQR;