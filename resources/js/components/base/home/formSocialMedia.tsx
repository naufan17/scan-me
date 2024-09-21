import React, { useState } from 'react';

const FormSocialMedia: React.FC = () => {
  const [socialMedia, setSocialMedia] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const optionSocialMedia = [
    {name: 'Instagram'},
    {name: 'Facebook'},
    {name: 'Twitter'},
    {name: 'LinkedIn'},
  ]

  const handlSocialMediaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSocialMedia(event.target.value);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  return (
    <div className="p-6 my-8 md:m-16 md:p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
          Social Media
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-4 my-8 w-full">
          <div className="flex items-center">
            <label
              htmlFor="socialMedia"
              className='flex text-sm md:text-base font-medium text-cyan-800'
            >
              Social Media
            </label>
          </div>
          <div className='flex col-span-3 items-center justify-center'>
            <select 
              id='socialMedia' 
              name='socialMedia' 
              value={socialMedia}
              onChange={handlSocialMediaChange}
              className="flex w-full h-10 px-2  text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md focus:outline-none focus:border-cyan-700"
              required
            >
              <option disabled selected hidden value="">
                Choose
              </option>
              {optionSocialMedia.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>              
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 my-8 w-full">
          <div className="flex items-center">
            <label
            htmlFor='username'
              className='flex text-sm md:text-base font-medium text-cyan-800'
            >
              Username
            </label>
          </div>
          <div className='flex col-span-3 items-center justify-center'>
            <input
              id='username'
              name='username'
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="flex w-full h-10 px-2 text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md placeholder:text-cyan-500 focus:outline-none focus:border-cyan-700"
              placeholder='Username'
              required
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <button 
            id="save-btn"
            type="submit"
            className="inline-flex items-center justify-center h-10 px-10 font-semibold font-sans text-white rounded bg-cyan-700 hover:bg-cyan-800"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSocialMedia;