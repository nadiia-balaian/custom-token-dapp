import { render, screen, fireEvent } from '@testing-library/react';
import { CoinListItem } from '@/components/CoinListItem';
import { MOCK_COIN } from '../../tests/mocks';

const selectCoinMock = vi.fn();

describe('CoinListItem', () => {
  test('renders coin details correctly', () => {
    render(
      <CoinListItem
        coin={MOCK_COIN}
        selectCoin={selectCoinMock}
        isSelected={false}
      />
    );

    expect(screen.getByRole('button', { name: /Select Ethereum/i })).toBeInTheDocument();
    expect(screen.getByAltText('Ethereum')).toHaveAttribute('src', '/coin-icons/eth.svg');
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
    expect(screen.getByText('ETH')).toBeInTheDocument();
  });

  test('calls selectCoin when button is clicked', () => {
    render(
      <CoinListItem
        coin={MOCK_COIN}
        selectCoin={selectCoinMock}
        isSelected={false}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /Select Ethereum/i }));
    expect(selectCoinMock).toHaveBeenCalledWith(MOCK_COIN);
  });

  test('shows CheckIcon when isSelected is true', () => {
    render(
      <CoinListItem
        coin={MOCK_COIN}
        selectCoin={selectCoinMock}
        isSelected={true}
      />
    );

    const checkIcon = screen.getByTestId('check-icon');
    expect(checkIcon).toBeInTheDocument();
  });

  test('does not show CheckIcon when isSelected is false', () => {
    render(
      <CoinListItem
        coin={MOCK_COIN}
        selectCoin={vi.fn()}
        isSelected={false}
      />
    );

    const checkIcon = screen.queryByTestId('check-icon');
    expect(checkIcon).not.toBeInTheDocument();
  });

  test('falls back to default image if coin icon fails to load', () => {
    render(
      <CoinListItem
        coin={MOCK_COIN}
        selectCoin={vi.fn()}
        isSelected={false}
      />
    );

    const img = screen.getByAltText('Ethereum');
    fireEvent.error(img); // Simulate image load error
    expect(img).toHaveAttribute('src', '/coin-icons/eth.svg');
  });
});
