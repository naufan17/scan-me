import React from 'react';

const FormImage: React.FC = () => {
  return (
    <div className="m-16 p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-2xl font-semibold text-cyan-800">
          Image
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-3 my-8 w-full">
          <div className="flex items-center">
            <label
              className='flex text-sm md:text-base font-medium text-cyan-800'
            >
              Image
            </label>
          </div>
          <div className='flex col-span-2 items-center justify-center'>
          <input 
            type="file" 
            id="image"
            name="image"
            className="flex w-full text-sm sm:text-base font-medium
              file:cursor-pointer file:h-10 file:px-4 file:mr-4 file:bg-cyan-200 file:hover:bg-cyan-300 file:text-cyan-800 file:border-0 file:rounded-full"
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

export default FormImage;