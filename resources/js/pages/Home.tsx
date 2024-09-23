import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CardOptionQR from '../components/base/home/cardOptionQR';
import FormUrl from '../components/base/home/formUrl';
import FormEmail from '../components/base/home/formEmail';
import FormText from '../components/base/home/formText';
import FormWhatsapp from '../components/base/home/formWhatsapp';
import FormImage from '../components/base/home/formImage';
import FormVideo from '../components/base/home/formVideo';
import FormDocument from '../components/base/home/formDocument';
import FormSocialMedia from '../components/base/home/formSocialMedia';

const Home: React.FC = () => {
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

export default Home;