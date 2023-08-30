/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useOrderDetails } from '../../context/OrderDetail';

interface PropsType {
  src: string;
  name: string;
}

const ToppingOption = ({ src, name }: PropsType) => {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e: any) => {
    const value = e.target.value as string;
    updateItemCount(name, parseInt(value), 'toppings');
  };
  return (
    <div className="w-[30px] h-[30px] bg-slate-300 flex flex-col">
      <img src={src} alt={`${name} topping`} className="w-32 h-32 object-cover bg-red-300" />
      <Form.Group controlId={`${name}-count`} as={Row} className="mt-[10px]">
        <Form.Label column xs="6" className="text-center">
          {name}
        </Form.Label>
        <div className="flex flex-col text-left">
          <Form.Control type="number" defaultValue={0} onChange={handleChange} />
        </div>
      </Form.Group>
    </div>
  );
};

export default ToppingOption;
