import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
} from '../../utils/test-utils/testing-library-utils';
import App from '../../App';

describe('Happy Test', () => {
  test('주문 생성 및 summary 페이지 이동', async () => {
    const { unmount } = render(<App />);
    const user = userEvent.setup();

    const grandTotal = screen.getByText('Grand Total: $', { exact: false });
    expect(grandTotal).toHaveTextContent('0.00');

    const toppingInput = await screen.findByRole('spinbutton', {
      name: 'Cherries',
    });
    const scoopInput = await screen.findByRole('checkbox', {
      name: 'Chocolate',
    });

    await user.clear(toppingInput);
    await user.type(toppingInput, '2');
    await user.click(scoopInput);
    await waitFor(() => expect(grandTotal).toHaveTextContent('6.00'));

    const nullSummaryHeader = screen.queryByText('Order Summary');
    expect(nullSummaryHeader).not.toBeInTheDocument();

    const submitButton = screen.getByText('Order');
    await user.click(submitButton);

    const summaryHeader = screen.queryByText('Order Summary');
    await waitFor(() => expect(summaryHeader).toBeInTheDocument());

    unmount();
  });
  test('이용 약관 제출 및 주문 페이지 이동 후 오더 생성 버튼 클릭, 새로운 order 생성 페이지 이동', async () => {
    const { unmount } = render(<App />);
    const user = userEvent.setup();
    const orderButton = screen.getByText('Order');
    await user.click(orderButton);

    const checkbox = screen.getByRole('checkbox');
    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeDisabled();
    await user.click(checkbox);

    expect(submitButton).toBeEnabled();
    await user.click(submitButton);

    const createOrderBtn = screen.getByText('Create new order');
    expect(createOrderBtn).toBeInTheDocument();

    await user.click(createOrderBtn);

    const grandTotal = screen.getByText('Grand Total: $', { exact: false });
    expect(grandTotal).toBeInTheDocument();

    unmount();
  });
});
