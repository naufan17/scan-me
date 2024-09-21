import React, { useState } from 'react';

const FormDocument: React.FC = () => {
  const [document, setDocument] = useState<File | null>(null);

  const handleDocumentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setDocument(file);
    }
  }

  return (
    <div className="p-6 my-8 md:m-16 md:p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
          Document
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-4 my-8 w-full">
          <div className="flex items-center">
            <label
              htmlFor='document'
              className='flex text-sm md:text-base font-medium text-cyan-800'
            >
              Document
            </label>
          </div>
          <div className='flex col-span-3 items-center justify-center'>
          <input 
            id="document"
            name="document"
            type="file" 
            accept='application/pdf'
            onChange={handleDocumentChange}
            className="flex w-full text-sm sm:text-base font-medium
              file:cursor-pointer file:h-10 file:px-4 file:mr-4 file:bg-cyan-200 file:hover:bg-cyan-300 file:text-cyan-800 file:border-0 file:rounded-full"
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

export default FormDocument;