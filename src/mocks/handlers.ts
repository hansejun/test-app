import { rest } from 'msw';

const BASE_URL = '/';

export const handlers = [
  rest.get(`${BASE_URL}scoops`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ]),
    );
  }),
  rest.get(`${BASE_URL}toppings`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Cherries', imagePath: '/images/cherries.png' },
        { name: 'Blueberry', imagePath: '/images/blueberry.png' },
        { name: 'Hotdog', imagePath: '/images/hotdog.png' },
      ]),
    );
  }),
];
