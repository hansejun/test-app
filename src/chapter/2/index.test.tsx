import { render, screen } from '@testing-library/react';
import ButtonSection from '.';

test('Button has correct initial color', () => {
  render(<ButtonSection />);
  // Change to blue라는 텍스트를 표시하는 요소 찾기
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // 해당 요소의 배경색이 맞는지 확인
  expect(colorButton).toHaveStyle({
    backgroundColor: 'rgb(239 68 68 / 1)',
  });
});

test('Button turns blue when clicked ', () => {
  render(<ButtonSection />);
});
