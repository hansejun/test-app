/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants';

export type OptionCounts = {
  scoops: { [key: string]: number };
  toppings: { [key: string]: number };
};

type OrderDetailsData = {
  optionCounts: OptionCounts;
  updateItemCount: (
    itemName: string,
    newItemCount: number,
    optionType: string,
  ) => void;
  resetOrder: () => void;
  totals: { scoops: number; toppings: number };
};

const defaultOrderDetails: OrderDetailsData = {
  optionCounts: { scoops: {}, toppings: {} },
  updateItemCount: () => {},
  resetOrder: () => {},
  totals: { scoops: 0, toppings: 0 },
};

const OrderDetail = createContext<OrderDetailsData | null>(defaultOrderDetails);

export function useOrderDetails() {
  const contextValue = useContext(OrderDetail);

  if (!contextValue) {
    throw new Error(
      'userOrderDetail must be called from within an OrderDetailProvider',
    );
  }

  return contextValue;
}

export function OrderDetailProvider(props: any) {
  const [optionCounts, setOptionCounts] = useState<any>({
    scoops: {},
    toppings: {},
  });

  function updateItemCount(
    itemName: string,
    newItemCount: number,
    optionType: string,
  ) {
    const newOptionCounts: any = { ...optionCounts };

    newOptionCounts[optionType][itemName] = newItemCount;

    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} });
  }

  function calculateTotal(optionType: string) {
    const conuntsArray: number[] = Object.values(optionCounts[optionType]);

    const totalCount = conuntsArray.reduce(
      (tot: number, value: number) => tot + value,
      0,
    );

    return totalCount * pricePerItem[optionType];
  }

  const totals: any = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings'),
  };

  const value = { optionCounts, updateItemCount, resetOrder, totals };

  return <OrderDetail.Provider value={value} {...props} />;
}
