import React from 'react';

interface PropsType {
  src: string;
  alt: string;
}

const ScoopOption = ({ src, alt }: PropsType) => {
  return (
    <img src={src} alt={`${alt} scoop`} className="w-20 h-20 object-cover" />
  );
};

export default ScoopOption;
