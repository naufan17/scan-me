import React, { useState, ChangeEvent } from 'react';
import InputForm from '../../ui/form/InputForm';
import ButtonForm from '../../ui/form/ButtonForm';

const FormEmail: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  return (
    <div className="p-6 my-8 md:m-16 md:p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
          Email
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-4 my-8 w-full">
          <InputForm
            name="Email"
            label="email"
            value={email}
            type="email"
            handleChange={handleChange}
            placeholder="email@example.com"
          />
        </div>
        <ButtonForm
          name='Generate'
        />
      </form>
    </div>
  );
};

export default FormEmail;