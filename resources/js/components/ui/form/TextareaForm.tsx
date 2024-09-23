import React from 'react';

interface TextareaFormProps {
  name: string;
  label: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  error: string;
}

const TextareaForm: React.FC<TextareaFormProps> = ({ name, label, value, handleChange, placeholder, error }) => {
  return (
    <>
      <div className="inline-block pt-2">
        <label
          htmlFor={label}
          className='inline-block text-sm sm:text-base font-medium text-cyan-800'
        >
          {name}
        </label>
      </div>
      <div className='inline-block col-span-3 items-center justify-center'>
        <textarea
          id={label}
          name={label}
          value={value}
          onChange={handleChange}
          className={`flex w-full h-28 sm:h-40 p-2 text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md placeholder:text-cyan-500 focus:outline-none focus:border-cyan-700 ${error? 'border-red-500 text-red-600 placeholder:text-red-300' : ''}`}
          placeholder={placeholder}
          required
        >
        </textarea>
        {error && <p className="text-xs sm:text-sm p-1 text-red-500">{error}</p>}
      </div>
    </>
  )
}

export default TextareaForm;