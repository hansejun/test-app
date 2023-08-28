import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ToppingOption from './test/toppingOption';

interface PropsType {
  optionType: string;
}

const Options = ({ optionType }: PropsType) => {
  const [toppings, setToppings] = useState<Topping[]>([]);

  const initData = async (type: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/${type}`);
      setToppings(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    initData(optionType);
  }, [optionType]);
  return (
    <div className="flex-center w-screen h-screen bg-gray-100">
      <div className="flex">
        {React.Children.toArray(
          toppings.map(item => (
            <ToppingOption src={item.imagePath} name={item.name} />
          )),
        )}
      </div>
    </div>
  );
};

export default Options;

export type Option = {
  alt: string;
  imagePath: string;
};

export type Topping = {
  name: string;
  imagePath: string;
};
