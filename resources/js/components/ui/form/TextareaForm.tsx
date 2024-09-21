import React from 'react';

interface TextareaFormProps {
  name: string;
  label: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const TextareaForm: React.FC<TextareaFormProps> = ({ name, label, value, handleChange, placeholder}) => {
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
        <textarea
          id={label}
          name={label}
          value={value}
          onChange={handleChange}
          className="flex w-full h-40 p-2 text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md placeholder:text-cyan-500 focus:outline-none focus:border-cyan-700"
          placeholder={placeholder}
          required
        >
        </textarea>
      </div>
    </>
  )
}

export default TextareaForm;