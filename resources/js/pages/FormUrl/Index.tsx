import React, { useState, ChangeEvent } from 'react';
import InputForm from '../../components/ui/form/InputForm';
import ButtonForm from '../../components/ui/form/ButtonForm';
import Container from '../../components/layout/Container';
import ImageQR from '../Home/ImageQR';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Index: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [showQR, setShowQR] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setUrl(event.target.value);
  }

  const handleGenerateQR = () => {
    const validateError = validateField();

    if (Object.keys(validateError).length > 0) {
      setError(validateError.url);
      return;
    }

    setError('');
    setShowQR(true);
  }

  const validateField = () => {
    const newError: {[key: string]: string} = {};
    const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:?#[\]@!$&'()*+,;=]*)?$/;

    if (url.length === 0) {
      newError.url = 'Url is required';
    } else if (urlRegex.test(url) === false) {
      newError.url = 'Url format is invalid';
    }
  
    return newError;
  }

  return (
    <>
      <Navbar/>
        <Container>
          <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-l from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
            <div className="grid grid-cols-4 my-8 w-full">
              <InputForm
                name="Url"
                label="url"
                value={url}
                type="text"
                handleChange={handleChange}
                placeholder="https://example.com"
                error={error}
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