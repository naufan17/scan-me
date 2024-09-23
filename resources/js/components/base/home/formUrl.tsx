import React, { useState, ChangeEvent } from 'react';
import InputForm from '../../ui/form/InputForm';
import ButtonForm from '../../ui/form/ButtonForm';
import Container from '../../layout/Container';
import ImageQR from './imageQR';

const FormUrl: React.FC = () => {
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
      <Container>
        <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
          <div className="flex mb-4 justify-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
              Url
            </h4>
          </div>
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
        </div>
      </Container>
      {showQR && <ImageQR/>}
    </>
  );
};

export default FormUrl;