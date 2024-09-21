import React from 'react';

interface OptionFormProps {
  label:string;
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  optionSocialMedia: {name: string}[];
}

const OptionForm: React.FC<OptionFormProps> = ({ label, name, value, handleChange, optionSocialMedia }) => {
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
        <select 
          id={label} 
          name={label}
          value={value}
          onChange={handleChange}
          className="flex w-full h-10 px-2  text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md focus:outline-none focus:border-cyan-700"
          required
        >
          <option disabled hidden value="">
            Choose
          </option>
          {optionSocialMedia.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>              
          ))}
        </select>
      </div>
    </>
  )
}

export default OptionForm;