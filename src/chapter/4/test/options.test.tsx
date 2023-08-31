import Options from '..';
import {
  render,
  screen,
} from '../../../utils/test-utils/testing-library-utils';

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
