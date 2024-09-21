import React, { useState } from 'react';
import InputForm from '../../ui/form/InputForm';
import ButtonForm from '../../ui/form/ButtonForm';

const FormWhatsapp: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  }

  return (
    <div className="p-6 my-8 md:m-16 md:p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
          WhatsApp
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-4 my-8 w-full">
          <InputForm
            name="Phone Number"
            label="phoneNumber"
            value={phoneNumber}
            type="text"
            handleChange={handleChange}
            placeholder="081234567890"
          />
        </div>
        <ButtonForm
          name='Generate'
        />
      </form>
    </div>
  );
};

export default FormWhatsapp;