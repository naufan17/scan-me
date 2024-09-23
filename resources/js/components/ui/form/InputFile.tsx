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
      <div className="inline-block items-center pt-2">
        <label
          htmlFor={label}
          className='inline-block text-sm sm:text-base font-medium text-cyan-800'
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
          className={`flex text-sm text-cyan-800 sm:text-base font-medium
            file:cursor-pointer file:h-8 sm:file:h-10 file:px-4 file:mr-4 file:bg-cyan-200 file:hover:bg-cyan-300 file:text-cyan-800 file:border-0 file:rounded-full 
            ${error? 'file:bg-red-200 file:text-red-800 file:hover:bg-red-300' : ''}`}
          required
        />
        {error && <p className="text-xs sm:text-sm p-1 text-red-500">{error}</p>}
      </div>
    </>
  )
}

export default InputFile;