import userEvent from '@testing-library/user-event';
import Options from '..';
import {
  render,
  screen,
  waitFor,
} from '../../../utils/test-utils/testing-library-utils';

test('update topping subtotal when toppings change', async () => {
  render(<Options optionType="toppings" />);

  const user = userEvent.setup();

  // make sure total starts out at $0.00
  const toppingsSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  });

  expect(toppingsSubtotal).toHaveTextContent('0.00');

  // update Bluberry topping to 1, and check subtotal
  const blueberryInput = await screen.findByRole('spinbutton', {
    name: 'Blueberry',
  });

  await user.clear(blueberryInput);
  await user.type(blueberryInput, '1');

  await waitFor(() => expect(toppingsSubtotal).toHaveTextContent('2.00'));

  // update Hotdog topping to 2, and check subtotal
  const hoydogInput = await screen.findByRole('spinbutton', { name: 'Hotdog' });
  await user.type(hoydogInput, '2');
  await waitFor(() => expect(toppingsSubtotal).toHaveTextContent('6.00'));
});

test('update  scoops change', async () => {
  render(<Options optionType="scoops" />);

  const user = userEvent.setup();

  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });

  expect(scoopsSubtotal).toHaveTextContent('0.00');

  const checkbox = await screen.findByRole('checkbox', { name: 'Chocolate' });

  await user.click(checkbox);

  expect(checkbox).toBeChecked();

  expect(scoopsSubtotal).toHaveTextContent('2.00');

  await user.click(checkbox);

  expect(scoopsSubtotal).toHaveTextContent('0.00');
});
