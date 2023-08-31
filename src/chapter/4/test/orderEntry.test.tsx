import OrderEntry from '../orderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import {
  render,
  screen,
  waitFor,
} from '../../../utils/test-utils/testing-library-utils';

test('Order Entry Error test', async () => {
  server.resetHandlers(
    rest.get('/toppings', (req, res, ctx) => res(ctx.status(500))),
    rest.get('/scoops', (req, res, ctx) => res(ctx.status(500))),
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});
