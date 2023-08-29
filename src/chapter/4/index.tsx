import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ToppingOption from './test/toppingOption';
import AlertBanner from '../../components/AlertBanner';

interface PropsType {
  optionType: string;
}

const Options = ({ optionType }: PropsType) => {
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [isError, setIsError] = useState(false);

  const initData = async (type: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/${type}`);
      setToppings(response.data);
    } catch (e) {
      setIsError(true);
    }
  };

  useEffect(() => {
    initData(optionType);
  }, [optionType]);

  if (isError) return <AlertBanner />;
  return (
    <div className="flex-center w-screen h-screen bg-gray-100">
      <div className="flex">
        {React.Children.toArray(
          toppings.map((item) => <ToppingOption src={item.imagePath} name={item.name} />),
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
