import React from 'react';

interface OptionFormProps {
  label:string;
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  optionSocialMedia: {name: string}[];
  error: string;
}

const OptionForm: React.FC<OptionFormProps> = ({ label, name, value, handleChange, optionSocialMedia, error }) => {
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
        <select 
          id={label} 
          name={label}
          value={value}
          onChange={handleChange}
          className={`flex w-full h-9 sm:h-10 px-2 text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md appearance-none focus:outline-none focus:border-cyan-700 ${error? 'border-red-500 text-red-600' : ''}`}
          required
        >
          <option disabled hidden value="">
            Choose
          </option>
          {optionSocialMedia.map((option) => (
            <option key={option.name} value={option.name} className='hover:bg-cyan-900'>
              {option.name}
            </option>              
          ))}
        </select>
        {error && <p className="text-xs sm:text-sm p-1 text-red-500">{error}</p>}
      </div>
    </>
  )
}

export default OptionForm;