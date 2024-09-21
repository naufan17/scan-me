import React, { ChangeEvent } from 'react';

interface InputFileProps {
  name: string;
  label: string;
  accept: string;
  type: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: React.FC<InputFileProps> = ({ name, label, accept, type, handleChange }) => {
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
          accept={accept}
          onChange={handleChange}
          className="flex w-full text-sm sm:text-base font-medium
            file:cursor-pointer file:h-10 file:px-4 file:mr-4 file:bg-cyan-200 file:hover:bg-cyan-300 file:text-cyan-800 file:border-0 file:rounded-full"
          required
          />
      </div>
    </>
  )
}

export default InputFile;