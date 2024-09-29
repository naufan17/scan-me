import React, { useState } from 'react';
import InputForm from '../../components/ui/form/InputForm';
import ButtonForm from '../../components/ui/form/ButtonForm';
import Container from '../../components/layout/Container';
import ImageQR from './ImageQR';

const FormWhatsapp: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [showQR, setShowQR] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
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
    <Container>
      <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-l from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
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
        {showQR && <ImageQR/>}
      </div>
    </Container>
  );
};

export default FormWhatsapp;