import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders App component with banner text', () => {
  render(<App />);
  const bannerText = screen.getByText(/Live with Confidence/i);
  expect(bannerText).toBeInTheDocument();
});
