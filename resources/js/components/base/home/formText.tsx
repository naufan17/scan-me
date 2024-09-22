import React, { useState } from 'react';
import TextareaForm from '../../ui/form/TextareaForm';
import ButtonForm from '../../ui/form/ButtonForm';
import Container from '../../layout/Container';
import ImageQR from './imageQR';

const FormText: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [showQR, setShowQR] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  const handleGenerateQR = () => {
    const validateError = validateField();

    if (Object.keys(validateError).length > 0) {
      setError(validateError.text);
      return;
    }

    setError('');
    setShowQR(true);
  }

  const validateField = () => {
    const newError: {[key: string]: string} = {};

    if (text.length === 0) {
      newError.text = 'Text is required';
    }
  
    return newError;
  }
  
  return (
    <>
      <Container>
        <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
          <div className="flex mb-4 justify-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
              Text
            </h4>
          </div>
          <div className="grid grid-cols-4 my-8 w-full">
            <TextareaForm
              name='Text'
              label='text'
              value={text}
              handleChange={handleChange}
              placeholder='Write your text here'
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

export default FormText;