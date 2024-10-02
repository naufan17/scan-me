import React, { useState } from 'react';
import InputForm from '../../components/ui/form/InputForm';
import ButtonForm from '../../components/ui/form/ButtonForm';
import OptionForm from '../../components/ui/form/OptionForm';
import Container from '../../components/layout/Container';
import ImageQR from '../Home/ImageQR';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Index: React.FC = () => {
  const [socialMedia, setSocialMedia] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<{[key: string]: string}>({});
  const [showQR, setShowQR] = useState<boolean>(false);
  const optionSocialMedia = [
    {name: 'Instagram'},
    {name: 'Facebook'},
    {name: 'Twitter'},
    {name: 'LinkedIn'},
  ]

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setError({});
    const { name, value } = event.target;

    switch (name) {
      case 'socialMedia':
        setSocialMedia(value);
        break;
      case 'username':
        setUsername(value);
        break;
      default:
        break;
    }
  }

  const handleGenerateQR = () => {
    const validateError = validateField();

    if (Object.keys(validateError).length > 0) {
      setError(validateError);
      return;
    }

    setError({});
    setShowQR(true);
  }

  const validateField = () => {
    const newError: {[key: string]: string} = {};
    
    if (socialMedia.length === 0) newError.socialMedia = 'Social Media is required';
    if (username.length === 0) newError.username = 'Username is required';

    return newError;
  }


  return (
    <>
      <Navbar/>
        <Container>
          <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-l from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
            <div className="grid grid-cols-4 my-8 w-full">
              <OptionForm
                label="socialMedia"
                name="Social Media"
                value={socialMedia}
                handleChange={handleChange}
                optionSocialMedia={optionSocialMedia}
                error={error.socialMedia}
              />
            </div>
            <div className="grid grid-cols-4 my-8 w-full">
              <InputForm
                name="Username"
                label="username"
                value={username}
                type="text"
                handleChange={handleChange}
                placeholder="Username"
                error={error.username}
              />
            </div>
            <ButtonForm
              name='Generate'
              onClick={handleGenerateQR}
            />
            {showQR && <ImageQR/>}
          </div>
        </Container>
      <Footer/>
    </>
  );
};

export default Index;