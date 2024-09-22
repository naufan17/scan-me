import React, { useState } from 'react';
import InputForm from '../../ui/form/InputForm';
import ButtonForm from '../../ui/form/ButtonForm';
import Container from '../../layout/Container';
import ImageQR from './imageQR';

const FormWhatsapp: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [showQR, setShowQR] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  }

  const handleGenerateQR = () => {
    const validateError = validateField();

    if (Object.keys(validateError).length > 0) {
      setError(validateError.phoneNumber);
      return;
    }

    setError('');
    setShowQR(true);
  }

  const validateField = () => {
    const newError: {[key: string]: string} = {};
    const phoneRegex = /^08[0-9]{8,14}$/;

    if (phoneNumber.length === 0) {
      newError.phoneNumber = 'Phone number is required';
    } else if (phoneRegex.test(phoneNumber) === false) {
      newError.phoneNumber = 'Phone number format is invalid';
    }
  
    return newError;
  }

  return (
    <>
      <Container>
        <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
          <div className="flex mb-4 justify-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
              WhatsApp
            </h4>
          </div>
          <div className="grid grid-cols-4 my-8 w-full">
            <InputForm
              name="Phone Number"
              label="phoneNumber"
              value={phoneNumber}
              type="text"
              handleChange={handleChange}
              placeholder="081234567890"
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

export default FormWhatsapp;