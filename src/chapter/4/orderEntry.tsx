import React from 'react';
import Options from '.';
import { useOrderDetails } from '../../context/OrderDetail';
import { formatCurrency } from '../../utils';
import { Phase } from '../../App';

interface PropsType {
  handlePhase: (phase: Phase) => void;
}

const OrderEntry = ({ handlePhase }: PropsType) => {
  const { totals } = useOrderDetails();

  const grandTotal = Object.values(totals).reduce(
    (tot, value) => tot + value,
    0,
  );
  return (
    <div className="flex  flex-col">
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {formatCurrency(grandTotal)}</h2>
      <button type="submit" onClick={() => handlePhase('review')}>
        Order
      </button>
    </div>
  );
};

export default OrderEntry;
