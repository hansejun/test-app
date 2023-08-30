import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '..';

test('update topping subtotal when toppings change', async () => {
  render(<Options optionType="toppings" />);

  const user = userEvent.setup();

  // make sure total starts out at $0.00
  const toppingsSubtotal = screen.getByText('Toppings total: $', { exact: false });
  expect(toppingsSubtotal).toHaveTextContent('0.00');

  // update Bluberry topping to 1, and check subtotal
  const blueberryInput = await screen.findByRole('spinbutton', { name: 'Blueberry' });

  await user.clear(blueberryInput);
  await user.type(blueberryInput, '1');
  expect(toppingsSubtotal).toHaveTextContent('2.00');

  // update Hotdog topping to 2, and check subtotal
});
