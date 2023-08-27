import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../form';

test('Inital condition', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms of service',
  });

  const submitButton = screen.getByRole('button', { name: 'Submit' });

  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});

test('"Check if the button is activated after checking the checkbox, then check the checkbox again to see if the button is deactivated."', async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();
  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms of service',
  });
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  await user.click(checkbox);
  expect(submitButton).toBeDisabled();
});
