import React from 'react';

interface PropsType {
  src: string;
  name: string;
}

const ToppingOption = ({ src, name }: PropsType) => {
  return <img src={src} alt={`${name} topping`} className="w-20 h-20" />;
};

export default ToppingOption;
