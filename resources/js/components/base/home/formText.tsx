import React, { useState } from 'react';
import TextareaForm from '../../ui/form/TextareaForm';
import ButtonForm from '../../ui/form/ButtonForm';

const FormText: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }

  return (
    <div className="p-6 my-8 md:m-16 md:p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
          Text
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-4 my-8 w-full">
          <TextareaForm
            name='Text'
            label='text'
            value={text}
            handleChange={handleChange}
            placeholder='Write your text here'
          />
        </div>
        <ButtonForm
          name='Generate'
        />
      </form>
    </div>
  );
};

export default FormText;