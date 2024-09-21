import React, { useState } from 'react';

const FormEmail: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  return (
    <div className="p-6 my-8 md:m-16 md:p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
          Email
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-4 my-8 w-full">
          <div className="flex items-center">
            <label
            htmlFor='email'
              className='flex text-sm md:text-base font-medium text-cyan-800'
            >
              Email
            </label>
          </div>
          <div className='flex col-span-3 items-center justify-center'>
            <input
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={handleChange}
              className="flex w-full h-10 px-2 text-sm sm:text-base text-cyan-800 border-2 border-cyan-100 rounded-md placeholder:text-cyan-500 focus:outline-none focus:border-cyan-700"
              placeholder='email@example.com'
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

export default FormEmail;