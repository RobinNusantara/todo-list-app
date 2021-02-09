import React from 'react';

type Color = | 'red' | 'green' | 'yellow'

interface Props {
  className?: string;
  color: Color;
  children: string;
}

const Alert: React.FC<Props> = (props) => {
  const {className, color, children} = props;
  return (
    <div className={`py-3 px-2 my-2 bg-${color}-300 text-center text-${color}-800 rounded border border-${color}-600 ${className && className}`}>
      {children}
    </div>
  );
};

export default Alert;
