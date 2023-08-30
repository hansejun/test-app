/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatCurrency = (curreny: any) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(curreny);
};
