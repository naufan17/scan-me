import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import TextareaForm from '../../components/ui/form/TextareaForm';
import ButtonForm from '../../components/ui/form/ButtonForm';
import Container from '../../components/layout/Container';
import ImageQR from './ImageQR';

interface ImageQRProps {
  qrcode?: string | undefined;
}

const FormText: React.FC<ImageQRProps> = ({ qrcode }) => {
  const [text, setText] = useState<string>('');
  const [showQR, setShowQR] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setError('');
    setText(event.target.value);
  }

  const handleGenerateQR = () => {
    const validateError = validateField();

    if (Object.keys(validateError).length > 0) {
      setError(validateError.text);
      return;
    }

    setError('');
    Inertia.post('/generate-qrcode/text', { text });
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
    <Container>
      <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-l from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
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
        {showQR && <ImageQR qrcode={qrcode}/>}
      </div>
    </Container>
  );
};

export default FormText;