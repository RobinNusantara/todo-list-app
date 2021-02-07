import React, {CSSProperties} from 'react';

const style: CSSProperties = {
  borderTopColor: 'transparent',
};

function Spinner() {
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div style={style} className="border-solid animate-spin  rounded-full border-gray-700 border-4 h-12 w-12"></div>
    </div>
  );
}

export default Spinner;
