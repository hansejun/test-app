import React, { useState } from 'react';

const ButtonSection = () => {
  const [isBlue, setIsBlue] = useState(false);

  const color = isBlue ? 'bg-blue-500' : 'bg-red-500';
  const text = isBlue ? 'Change to red' : 'Change to blue';

  return (
    <button className={`${color} p-4`} onClick={() => setIsBlue(prev => !prev)}>
      {text}{' '}
    </button>
  );
};

export default ButtonSection;
