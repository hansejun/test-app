/*
 Write test to ensures by default 
    [x] Checkbox is unchecked by default 
    [x] Checking checkbox enables button
    [x] Unchecking checkbox again disables button

A chance to set up your own test file from scratch
    [] Use test from last section as a model
    [] Render th <SummaryForm /> Component

Find checkbox and button usting {name} option
    [x] Use mockup for 'name' option values

Check that tests fail. Red part of red-green testing
*/

import { fireEvent, render, screen } from '@testing-library/react';
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

test('"Check if the button is activated after checking the checkbox, then check the checkbox again to see if the button is deactivated."', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms of service',
  });
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(submitButton).toBeDisabled();
});
