import React, {ReactElement} from 'react';

interface Props {
  children: ReactElement;
}

const LayoutFactory: React.FC<Props> = (props) => {
  const {children} = props;
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white lg:w-4/12 md:w-6/12 w-10/12 m-auto my-10 shadow-md rounded-md">
        <div className="py-8 px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutFactory;
