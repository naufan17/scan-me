import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CardOptionQR from './CardOptionQR';
import Navbar from '../../components/layout/Navbar';

const Index: React.FC = () => {
  const optionQRData = [
    { icon: 'fas fa-link', label: 'Url', url:'url' },
    { icon: 'fas fa-font', label: 'Text', url:'text' },
    { icon: 'fas fa-envelope', label: 'Email', url: 'email' },
    { icon: 'fa-brands fa-whatsapp', label: 'Whatsapp', url: 'whatsapp' },
    { icon: 'fas fa-circle-user', label: 'Social Media', url: 'social-media' },
    { icon: 'fas fa-file', label: 'Document', url: 'document' },
    { icon: 'fas fa-image', label: 'Image', url: 'image' },
    { icon: 'fas fa-video', label: 'Video', 'url': 'video' },
  ]

  return (
    <>
      <Navbar/>
      <Header
        title='Scan Me'
        subtitle='Create and Customize QR Code'
      />
      <CardOptionQR
        optionQRData={optionQRData}
      />
      <Footer/>
    </>
  );
};

export default Index;