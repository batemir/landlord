import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  render(<App />);
  const noDataElement = screen.getByText(/Нет данных/i);
  expect(noDataElement).toBeInTheDocument();
});
