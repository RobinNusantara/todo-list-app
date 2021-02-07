import React from 'react';

interface Props {
  className?: string;
  type?: any;
  children: string;
}

const baseStyle: string = 'border rounded-md transition duration-500 ease select-none focus:outline-none focus:shadow-outline';

const Primary: React.FC<Props> = (props) => {
  const {className, type, children} = props;
  return <button type={type} className={`${baseStyle} ${className && className} text-white bg-gray-700 hover:bg-gray-800`}>{children}</button>;
};

const Secondary: React.FC<Props> = (props) => {
  const {className, type, children} = props;
  return <button type={type} className={`${baseStyle} ${className && className} text-gray bg-gray-200 hover:bg-gray-300`}>{children}</button>;
};

export {Primary, Secondary};
