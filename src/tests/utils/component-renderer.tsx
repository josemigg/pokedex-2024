import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderComponent = (component: ReactNode) => {
  render(<BrowserRouter>{component}</BrowserRouter>);
};
