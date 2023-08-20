import { fireEvent, render, screen } from '@testing-library/react';
import ButtonSection, { replaceCamelWithSpaces } from '.';

test('Button has correct initial color and updates click', () => {
  render(<ButtonSection />);
  // Change to blue라는 텍스트를 표시하는 요소 찾기
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // 해당 요소의 배경색이 맞는지 확인
  expect(colorButton).toHaveStyle({
    backgroundColor: 'rgb(239 68 68 / 1)',
  });

  // click button
  fireEvent.click(colorButton);

  // 클릭하고 난 뒤에 색상이 해당 색상이 맞는지 확인
  expect(colorButton).toHaveStyle({
    backgroundColor: 'rgb(59 130 246 / 1)',
  });

  // 클릭하고 난 뒤에 텍스트가 'Change to red'가 맞는지 확인
  expect(colorButton).toHaveTextContent('Change to red');
});

test('체크 박스 체크 테스트', () => {
  render(<ButtonSection />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disabled button' });

  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);

  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();
});

test('Disabled 버튼 색상 테스트', () => {
  render(<ButtonSection />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disabled button' });

  // initial
  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();

  // 버튼을 클릭하지 않은 상태에서 비활성화
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveClass('bg-gray-500');

  // 버튼을 클릭하지 않은 상태에서 활성화
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();
  expect(colorButton).toHaveClass('bg-red-500');

  // 버튼을 클릭한 상태에서 비활성화
  fireEvent.click(colorButton);
  fireEvent.click(checkBox);
  expect(colorButton).toHaveClass('bg-gray-500');

  // 버튼을 클릭하지 않은 상태에서 활성화
  fireEvent.click(checkBox);
  expect(colorButton).toHaveClass('bg-blue-500');
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for muliple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
