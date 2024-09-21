import React, { ChangeEvent } from 'react';

interface InputFormProps {
  name: string;
  label: string;
  value: string;
  type: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputForm: React.FC<InputFormProps> = ({ name, label, value, type, handleChange, placeholder}) => {
  return (
    <>
      <div className="flex items-center">
        <label
          htmlFor={label}
          className='flex text-sm md:text-base font-medium text-cyan-800'
        >
          {name}
        </label>
      </div>
      <div className='flex col-span-3 items-center justify-center'>
        <input
          id={label}
          name={label}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="flex w-full h-10 px-2 text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md placeholder:text-cyan-500 focus:outline-none focus:border-cyan-700"
          required
        />
      </div>
    </>
  )
}

export default InputForm;