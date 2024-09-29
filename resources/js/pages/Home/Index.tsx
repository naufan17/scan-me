import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CardOptionQR from './CardOptionQR';
import FormUrl from './FormUrl';
import FormEmail from './FormEmail';
import FormText from './FormText';
import FormWhatsapp from './FormWhatsapp';
import FormImage from './FormImage';
import FormVideo from './FormVideo';
import FormDocument from './FormDocument';
import FormSocialMedia from './FormSocialMedia';

interface ImageQRProps {
  qrcode?: string
}

const Index: React.FC<ImageQRProps> = ({ qrcode }) => {
  const [option, setOption] = useState<string | null>(null);
  const optionQRData = [
    { icon: 'fas fa-link', label: 'Url' },
    { icon: 'fas fa-font', label: 'Text' },
    { icon: 'fas fa-envelope', label: 'Email' },
    { icon: 'fa-brands fa-whatsapp', label: 'Whatsapp' },
    { icon: 'fas fa-circle-user', label: 'Social Media' },
    { icon: 'fas fa-file', label: 'Document' },
    { icon: 'fas fa-image', label: 'Image' },
    { icon: 'fas fa-video', label: 'Video' },
  ]

  const handleClickOption = (label: string) => {
    setOption(label);
  }

  if (qrcode) {
    console.log(qrcode)
  }

  return (
    <>
      <Header
        title='Scan Me'
        subtitle='Create and Customize QR Code'
      />
      <CardOptionQR
        optionQRData={optionQRData}
        onClickOption={handleClickOption}
      />
      {option === 'Url' && <FormUrl/> }
      {option === 'Text' && <FormText/>}
      {option === 'Email' && <FormEmail/>}
      {option === 'Whatsapp' && <FormWhatsapp/>}
      {option === 'Social Media' && <FormSocialMedia/>}
      {option === 'Document' && <FormDocument/>}
      {option === 'Image' && <FormImage/>}
      {option === 'Video' && <FormVideo/>}
      <Footer/>
    </>
  );
};

export default Index;