import React, { useState } from 'react';
import InputFile from '../../ui/form/InputFile';
import ButtonForm from '../../ui/form/ButtonForm';

const FormVideo: React.FC = () => {
  const [video, setVideo] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideo(file);
    }
  }

  return (
    <div className="p-6 my-8 md:m-16 md:p-12 bg-gradient-to-b from-cyan-50 rounded-xl border-2 border-cyan-100 place-items-center">
      <div className="flex mb-4 justify-center">
        <h4 className="text-xl sm:text-2xl font-semibold text-cyan-800">
          Video
        </h4>
      </div>
      <form>
        <div className="grid grid-cols-4 my-8 w-full">
          <InputFile
            name="Video"
            label="video"
            accept="video/*"
            type="file"
            handleChange={handleChange}
          />
        </div>
        <ButtonForm
          name='Generate'
        />
      </form>
    </div>
  );
};

export default FormVideo;