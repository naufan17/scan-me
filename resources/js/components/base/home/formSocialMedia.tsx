import React, { useState } from 'react';
import InputForm from '../../ui/form/InputForm';
import ButtonForm from '../../ui/form/ButtonForm';
import OptionForm from '../../ui/form/OptionForm';
import Container from '../../layout/Container';
import ImageQR from './imageQR';

const FormSocialMedia: React.FC = () => {
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
      <Container>
        <div className="p-6 md:p-12 md:mx-16 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
          <div className="flex mb-4 justify-center">
            <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
              Social Media
            </h4>
          </div>
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
        </div>
      </Container>
      {showQR && <ImageQR/>}
    </>
  );
};

export default FormSocialMedia;