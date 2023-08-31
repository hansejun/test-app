import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { OrderDetailProvider } from '../../context/OrderDetail';

const renderWithContext = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: OrderDetailProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
