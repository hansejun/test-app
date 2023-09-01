import React, { useEffect, useState } from 'react';
import { Phase } from '../../App';
import axios from 'axios';

interface PropsType {
  handlePhase: (phase: Phase) => void;
}
const OrderConfirmation = ({ handlePhase }: PropsType) => {
  const [orderNumber, setOrderNumber] = useState(0);

  const getOrderNumber = async () => {
    try {
      const response = await axios.get('/');
      setOrderNumber(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    getOrderNumber();
  }, []);

  // getData
  return (
    <form className="flex flex-col items-center w-full">
      <h2 className="text-xl">Thank you!</h2>
      <h3 className="text-lg">Your order number is {orderNumber}</h3>
      <p className="text-sm">
        as per our terms and conditions, nothing will happen now
      </p>
      <button
        className="text-md font-semibold"
        onClick={() => handlePhase('inProgress')}
      >
        Create new order
      </button>
    </form>
  );
};

export default OrderConfirmation;
