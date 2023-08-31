import React from 'react';
import Options from '.';
import { useOrderDetails } from '../../context/OrderDetail';
import { formatCurrency } from '../../utils';

const OrderEntry = () => {
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
    </div>
  );
};

export default OrderEntry;
