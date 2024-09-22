import React from 'react';

interface ButtonFormProps {
  name: string;
  onClick: () => void;
}

const ButtonForm: React.FC<ButtonFormProps> = ({ name, onClick }) => {
  return (
    <div className="flex justify-center md:justify-end">
      <button
        onClick={onClick}
        className="inline-flex items-center justify-center h-10 px-10 font-semibold font-sans text-white rounded bg-cyan-700 hover:bg-cyan-800"
      >
        {name}
      </button>
    </div>
  )
}

export default ButtonForm;