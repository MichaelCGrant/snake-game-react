import { render, screen } from '@testing-library/react';
import App from './App';

test('renders board', () => {
  render(<App />);
  const board = screen.getByTestId('board');
  expect(board).toBeInTheDocument();
});

test('renders apple', () => {
  render(<App />);
  const apple = screen.getByTestId('apple');
  expect(apple).toBeInTheDocument();
});

test('renders snake head', () => {
  render(<App />);
  const head = screen.getByTestId('head');
  expect(head).toBeInTheDocument();
});