import React from 'react';
import Container from '../../components/layout/Container';
import { Link } from '@inertiajs/react';

interface CardOptionQRProps {
  optionQRData: { icon: string; label: string, url: string }[];
}

const CardOptionQR: React.FC<CardOptionQRProps> = ({ optionQRData }) => {
  return (
    <Container> 
      <div className="md:mx-16">
        <div className="grid gap-6 md:gap-12 grid-cols-3  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {optionQRData.map((item, index) => (
            <Link
              key={index}
              href={`${item.url}`}
              className="cursor-pointer text-cyan-800 hover:text-slate-800"
            >
              <div className="flex mx-auto mb-2 w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-2xl items-center justify-center rounded-full bg-cyan-100">
                <i className={`${item.icon}`}></i>
              </div>
              <h6 className="text-sm sm:text-base font-medium text-center ">
                {item.label}
              </h6>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CardOptionQR;