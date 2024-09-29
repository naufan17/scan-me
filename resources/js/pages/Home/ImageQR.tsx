import React from 'react';
import Button from '../../components/ui/Button';

interface ImageQRProps {
  qrcode?: string | undefined;
}

const ImageQR: React.FC<ImageQRProps> = ({ qrcode }) => {
  console.log(`ImageQR: ${qrcode}`);

  return (
    <>
      <div className="flex justify-center my-8 md:my-12">
        <div className="w-48 sm:w-72 h-48 sm:h-72">
          <img
            src={`data:image/png;base64,${qrcode}`} 
            alt="QR Code"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <a href={`data:image/png;base64,${qrcode}`} download="QRCode.png">
          <Button
            name='Download'
          />
        </a>
      </div>
    </>
  )
}

export default ImageQR;