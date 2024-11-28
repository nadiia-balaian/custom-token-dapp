import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { Search } from './Search';

const handleSearchMock = vi.fn();
describe('Search Component', () => {
  test('renders the search input with correct placeholder and aria-label', () => {
    render(
      <Search
        searchQuery=""
        handleSearch={handleSearchMock}
      />
    );

    const input = screen.getByRole('textbox', { name: /search/i }) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Search');
    expect(input).toHaveAttribute('aria-label', 'Search');
  });

  test('calls handleSearch on input change', () => {
    const handleSearchMock = vi.fn();
    render(
      <Search
        searchQuery=""
        handleSearch={handleSearchMock}
      />
    );

    const input = screen.getByRole('textbox', { name: /search/i });
    fireEvent.change(input, { target: { value: 'BTC' } });

    waitFor(() => {
      expect(handleSearchMock).toHaveBeenCalledTimes(1);
      expect((input as HTMLInputElement).value).toBe('BTC');
    });

  });
});
