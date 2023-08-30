import React from 'react';
import SummaryForm from './form';
import { formatCurrency } from '../../utils';
import { useOrderDetails } from '../../context/OrderDetail';

const Summary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopArr = Object.entries(optionCounts.scoops); // [['name',count]]

  const scoopList = scoopArr.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingArr = Object.keys(optionCounts.toppings);

  const toppingList = toppingArr.map((key) => <li key={key}>{key}</li>);

  return (
    <div className="flex-column">
      <h1 className="text-lg">Order Summary</h1>
      <h2>scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>
      <h2>toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingList}</ul>
      <SummaryForm />
    </div>
  );
};

export default Summary;
