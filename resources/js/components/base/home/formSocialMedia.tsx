import React, { useState } from 'react';
import InputForm from '../../ui/form/InputForm';
import ButtonForm from '../../ui/form/ButtonForm';
import OptionForm from '../../ui/form/OptionForm';

const FormSocialMedia: React.FC = () => {
  const [socialMedia, setSocialMedia] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const optionSocialMedia = [
    {name: 'Instagram'},
    {name: 'Facebook'},
    {name: 'Twitter'},
    {name: 'LinkedIn'},
  ]

  const handlSocialMediaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSocialMedia(event.target.value);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  return (
    <div className="p-6 my-8 md:m-16 md:p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
          Social Media
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-4 my-8 w-full">
          <OptionForm
            label="socialMedia"
            name="Social Media"
            value={socialMedia}
            handleChange={handlSocialMediaChange}
            optionSocialMedia={optionSocialMedia}
          />
        </div>
        <div className="grid grid-cols-4 my-8 w-full">
          <InputForm
            name="Username"
            label="username"
            value={username}
            type="text"
            handleChange={handleUsernameChange}
            placeholder="username"
          />
        </div>
        <ButtonForm
          name='Generate'
        />
      </form>
    </div>
  );
};

export default FormSocialMedia;