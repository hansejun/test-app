import userEvent from '@testing-library/user-event';
import SummaryForm from '../form';
import {
  render,
  screen,
} from '../../../utils/test-utils/testing-library-utils';

test('Inital condition', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox');

  const submitButton = screen.getByRole('button', { name: 'Submit' });

  expect(checkbox).not.toBeChecked();
  expect(submitButton).toBeDisabled();
});

test('"Check if the button is activated after checking the checkbox, then check the checkbox again to see if the button is deactivated."', async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();
  const checkbox = screen.getByRole('checkbox');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(submitButton).toBeEnabled();

  await user.click(checkbox);
  expect(submitButton).toBeDisabled();
});

test('Popover mouse event test', async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();
  const label = screen.getByText('Terms of service');
  const checkbox = screen.getByRole('checkbox');

  await user.click(checkbox);

  // popover queryByText는 element가 존재하지 않는 경우 null을 리턴
  const nullPopover = screen.queryByText('Hello');
  expect(nullPopover).not.toBeInTheDocument();

  // terms of service text에 hover하였을 때 popover가 정상적으로 화면에 표시되는지 확인
  await user.hover(label);
  const popover = screen.getByText('Hello');
  expect(popover).toBeInTheDocument();

  // unhover 했을 때 popover가 화면에서 사라졌는지를 확인
  await user.unhover(label);
  expect(nullPopover).not.toBeInTheDocument();
});
