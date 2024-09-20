import React from 'react';

const FormSocialMedia: React.FC = () => {
  const optionSocialMedia = [
    {name: 'Instagram'},
    {name: 'Facebook'},
    {name: 'Twitter'},
    {name: 'LinkedIn'},
  ]

  return (
    <div className="m-16 p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-2xl font-semibold text-cyan-800">
          Social Media
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-3 my-8 w-full">
          <div className="flex items-center">
            <label
              className='flex text-sm md:text-base font-medium text-cyan-800'
            >
              Social Media
            </label>
          </div>
          <div className='flex col-span-2 items-center justify-center'>
            <select className="flex w-full h-10 px-2 text-sm sm:text-base border-2 border-cyan-100 rounded-md focus:outline-none focus:border-cyan-700">
              <option disabled selected hidden value="">
                Choose
              </option>
              {optionSocialMedia.map((option) => (
                <option key={option.name}  value={option.name}>
                  {option.name}
                </option>              
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 my-8 w-full">
          <div className="flex items-center">
            <label
              className='flex text-sm md:text-base font-medium text-cyan-800'
            >
              Username
            </label>
          </div>
          <div className='flex col-span-2 items-center justify-center'>
            <input
              type="text"
              className="flex w-full h-10 px-2 text-sm sm:text-base border-2 border-cyan-100 rounded-md focus:outline-none focus:border-cyan-700"
            />
          </div>
        </div>
        <div className="flex justify-end">
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