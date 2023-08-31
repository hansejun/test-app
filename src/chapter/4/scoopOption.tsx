import React, { ChangeEvent } from 'react';
import { useOrderDetails } from '../../context/OrderDetail';

interface PropsType {
  src: string;
  name: string;
}

const ScoopOption = ({ src, name }: PropsType) => {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const count = checked ? 1 : 0;
    updateItemCount(name, count, 'scoops');
  };

  return (
    <div className="flex flex-col">
      <img
        src={src}
        alt={`${name} scoop`}
        className="w-32 h-32 object-cover bg-red-300"
      />
      <div className="flex">
        <input type="checkbox" onChange={handleChange} id={name} />
        <label htmlFor={name}>{name}</label>
      </div>
    </div>
  );
};

export default ScoopOption;
