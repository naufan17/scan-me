import React, { ChangeEvent } from 'react';

interface InputFormProps {
  name: string;
  label: string;
  value: string;
  type: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: string;
}

const InputForm: React.FC<InputFormProps> = ({ name, label, value, type, handleChange, placeholder, error }) => {
  return (
    <>
      <div className="inline-block items-center pt-2">
        <label
          htmlFor={label}
          className='inline-block text-sm sm:text-base font-medium text-cyan-800'
        >
          {name}
        </label>
      </div>
      <div className='inline-block col-span-3'>
        <input
          id={label}
          name={label}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`flex w-full h-9 sm:h-10 px-2 text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md placeholder:text-cyan-500 focus:outline-none focus:border-cyan-700 ${error? 'border-red-500 text-red-600 placeholder:text-red-300' : ''}`}
          required
        />
        {error && <p className="text-xs sm:text-sm p-1 text-red-500">{error}</p>}
      </div>
    </>
  )
}

export default InputForm;