import React, { useState } from 'react';
import Container from '../../layout/Container';
import FormUrl from './formUrl';
import FormText from './formText';
import FormWhatsapp from './formWhatsapp';
import FormEmail from './formEmail';
import FormImage from './formImage';
import FormVideo from './formVideo';
import FormDocument from './formDocument';
import FormSocialMedia from './formSocialMedia';

const OptionQR: React.FC = () => {
  const [option, setOption] = useState<string | null>(null);
  const optionQRData = [
    { icon: 'fas fa-link', label: 'Url' },
    { icon: 'fas fa-font', label: 'Text' },
    { icon: 'fas fa-envelope', label: 'Email' },
    { icon: 'fa-brands fa-whatsapp', label: 'Whatsapp' },
    { icon: 'fas fa-image', label: 'Image' },
    { icon: 'fas fa-video', label: 'Video' },
    { icon: 'fas fa-file', label: 'Document' },
    { icon: 'fas fa-circle-user', label: 'Social Media' },
  ]

  const handleCardClick = (label: string) => {
    setOption(label);
  }

  return (
    <Container>
      <div className="m-16">
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {optionQRData.map((item, index) => (
            <div 
              key={index} 
              className="p-4 bg-gradient-to-b from-cyan-50 duration-300 transform border-2 border-cyan-100 rounded-md hover:border-cyan-700"
              onClick={() => handleCardClick(item.label)}
            >
              <div className="flex mx-auto mb-2 w-10 h-10 text-xl items-center justify-center rounded-full bg-cyan-100">
                <i className={`${item.icon} text-cyan-700`}></i>
              </div>
              <h6 className="text-base font-medium text-center text-cyan-800">
                {item.label}
              </h6>
            </div>          
          ))}
        </div>
      </div>
      {option === 'Url' && <FormUrl/>}
      {option === 'Text' && <FormText/>}
      {option === 'Email' && <FormEmail/>}
      {option === 'Whatsapp' && <FormWhatsapp/>}
      {option === 'Image' && <FormImage/>}
      {option === 'Video' && <FormVideo/>}
      {option === 'Document' && <FormDocument/>}
      {option === 'Social Media' && <FormSocialMedia/>}
    </Container>
  );
};

export default OptionQR;