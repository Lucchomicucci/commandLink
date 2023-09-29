import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundPage from './notFound';

test('renders NotFoundPage without crashing', () => {
  render(<NotFoundPage />);
});

test('displays 404 error code', () => {
  render(<NotFoundPage />);
  expect(screen.getByTestId('code')).toBeInTheDocument();
});

test('displays error message', () => {
  render(<NotFoundPage />);
  expect(screen.getByTestId("error-message")).toBeInTheDocument();
});

test('displays error details', () => {
  render(<NotFoundPage />);
  expect(screen.getByTestId("error-details")).toBeInTheDocument();
});

test('provides a link to the homepage', () => {
  render(<NotFoundPage />);
  expect(screen.getByTestId("link-home")).toBeInTheDocument();
});
