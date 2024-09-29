import React, { useState } from 'react';
import InputFile from '../../components/ui/form/InputFile';
import ButtonForm from '../../components/ui/form/ButtonForm';
import Container from '../../components/layout/Container';
import ImageQR from './ImageQR';

const FormImage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [showQR, setShowQR] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  }

  const handleGenerateQR = () => {
    const validateError = validateField();

    if (Object.keys(validateError).length > 0) {
      setError(validateError.image);
      return;
    }

    setError('');
    setShowQR(true);
  }

  const validateField = () => {
    const newError: {[key: string]: string} = {};
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (!image) {
      newError.image = 'Image is required';
    } else if (!validTypes.includes(image.type)) {
      newError.image = 'Image format is invalid';
    }
  
    return newError;
  }

  return (
    <Container>
      <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-l from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
        <div className="grid grid-cols-4 my-8 w-full">
          <InputFile
            name="Image"
            label="image"
            accept="image/*"
            type="file"
            handleChange={handleChange}
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

export default FormImage;