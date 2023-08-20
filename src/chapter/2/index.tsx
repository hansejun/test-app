import React, { useState } from 'react';

const ButtonSection = () => {
  const [isBlue, setIsBlue] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const color = isChecked
    ? 'bg-gray-500'
    : isBlue
    ? 'bg-blue-500'
    : 'bg-red-500';

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
      <input
        type="checkbox"
        id="disabled-button-checkbox"
        onChange={e => setIsChecked(e.target.checked)}
      />
      <label htmlFor="disabled-button-checkbox">Disabled button</label>
    </div>
  );
};

export default ButtonSection;

export function replaceCamelWithSpaces(color: string) {
  return color.replace(/\B([A-Z]\B)/g, ' $1');
}
