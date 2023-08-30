import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../orderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test('Order Entry Error test', async () => {
  server.resetHandlers(
    rest.get('/toppings', (req, res, ctx) => res(ctx.status(500))),
    rest.get('/scoops', (req, res, ctx) => res(ctx.status(500))),
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(1);
  });
});
