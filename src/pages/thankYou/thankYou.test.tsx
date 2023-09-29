import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import '@testing-library/jest-dom';
import ThankYouPage from './thankYou';


const renderWithRedux = (
  component: React.ReactElement
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('renders ThankYouPage', () => {
  renderWithRedux(<ThankYouPage />);
  expect(screen.getByTestId("thank-you-test")).toBeInTheDocument();
});


