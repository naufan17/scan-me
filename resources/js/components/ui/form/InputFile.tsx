import React, { ChangeEvent } from 'react';

interface InputFileProps {
  name: string;
  label: string;
  accept: string;
  type: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const InputFile: React.FC<InputFileProps> = ({ name, label, accept, type, handleChange, error }) => {
  return (
    <>
      <div className="inline-block items-center">
        <label
          htmlFor={label}
          className='flex text-sm md:text-base font-medium text-cyan-800'
        >
          {name}        
        </label>
      </div>
      <div className='inline-block col-span-3 items-center justify-center'>
        <input 
          id={label}
          name={label}
          type={type} 
          accept={accept}
          onChange={handleChange}
          className="flex w-full text-sm text-cyan-800 sm:text-base font-medium
            file:cursor-pointer file:h-10 file:px-4 file:mr-4 file:bg-cyan-200 file:hover:bg-cyan-300 file:text-cyan-800 file:border-0 file:rounded-full"
          required
        />
        {error && <p className="text-sm p-1 text-red-500">{error}</p>}
      </div>
    </>
  )
}

export default InputFile;