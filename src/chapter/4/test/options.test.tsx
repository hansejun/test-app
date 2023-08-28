import { render, screen } from '@testing-library/react';
import Options from '..';

test('Display image for each topping option from server', async () => {
  render(<Options optionType="toppings" />);

  const images: HTMLImageElement[] = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(images).toHaveLength(3);

  const altText = images.map(img => img.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'Blueberry topping',
    'Hotdog topping',
  ]);
});
