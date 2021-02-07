import React, {ChangeEvent} from 'react';

interface Props {
  className?: string;
  type: string;
  label: string;
  placeholder: string;
  handleChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({...props}) => {
  const {className, type, label, placeholder, handleChange} = props;
  return (
    <div className={`text-sm ${className && className}`}>
      <label htmlFor={label.toLocaleLowerCase()} className="block text-black">{label}</label>
      <input
        id={label.toLocaleLowerCase()}
        type={type}
        autoFocus
        className={`rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 ${className && className}`}
        placeholder={placeholder}
        onChange={handleChange}/>
    </div>
  );
};

export default TextField;
