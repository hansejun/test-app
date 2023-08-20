import { fireEvent, render, screen } from '@testing-library/react';

import ButtonSection from '.';

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
  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);

  expect(colorButton).toBeEnabled();
  expect(checkBox).not.toBeChecked();
});
