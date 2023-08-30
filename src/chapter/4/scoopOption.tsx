import React from 'react';

interface PropsType {
  src: string;
  name: string;
}

const ScoopOption = ({ src, name }: PropsType) => {
  return <img src={src} alt={`${name} scoop`} className="w-32 h-32 object-cover bg-grey-300" />;
};

export default ScoopOption;
