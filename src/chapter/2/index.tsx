import React, { useState } from 'react';

const ButtonSection = () => {
  const [isBlue, setIsBlue] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const color = isBlue ? 'bg-blue-500' : 'bg-red-500';
  const text = isBlue ? 'Change to red' : 'Change to blue';

  return (
    <div>
      <button
        className={`${color} p-4`}
        disabled={isChecked}
        onClick={() => setIsBlue(prev => !prev)}
      >
        {text}{' '}
      </button>
      <input type="checkbox" onChange={e => setIsChecked(e.target.checked)} />
    </div>
  );
};

export default ButtonSection;
