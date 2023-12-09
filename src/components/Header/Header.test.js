import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('renders Header component with logo and mobile menu', () => {
  render(<Header />);
  
  const logoElement = screen.getByAltText('Logo');
  expect(logoElement).toBeInTheDocument();

  const mobileMenuClosed = screen.getByTestId('mobile-menu');
  expect(mobileMenuClosed).toHaveClass('hide-menu');

  const menuIcon = screen.getByAltText('Menu Icon');
  fireEvent.click(menuIcon);

  const mobileMenuOpen = screen.getByTestId('mobile-menu');
  expect(mobileMenuOpen).toHaveClass('mobile');
});
