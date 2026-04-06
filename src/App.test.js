import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EDUTECHEX header', () => {
  render(<App />);
  const headerElement = screen.getByText(/EDUTECH/i);
  expect(headerElement).toBeInTheDocument();
});