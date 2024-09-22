import React from 'react';
import Button from '../../ui/Button';
import Container from '../../layout/Container';

const ImageQR: React.FC = () => {
  return (
    <Container>
      <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
        <div className="flex mb-4 justify-center">
          <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
            QR
          </h4>
        </div>
        <div className="flex justify-center my-8 md:my-12">
          <div className="w-60 h-60">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=Hello%20World" 
              alt="QR Code"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            name='Download'
          />
        </div>
      </div>
    </Container>
  )
}

export default ImageQR;