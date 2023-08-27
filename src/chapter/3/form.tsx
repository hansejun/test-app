import React, { useState } from 'react';

const SummaryForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClickCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisabled(!e.target.checked);
  };

  return (
    <form className="flex-column border-zinc-400">
      <div className="flex">
        <input
          type="checkbox"
          id="terms-of-service"
          onChange={handleClickCheckBox}
        />
        <label htmlFor="terms-of-service">I agree to Terms of service</label>
      </div>
      <button disabled={isDisabled} className="border p-2 disabled:bg-red-300">
        Submit
      </button>
    </form>
  );
};

export default SummaryForm;
