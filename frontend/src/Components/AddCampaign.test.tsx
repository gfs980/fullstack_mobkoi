import React from 'react';
import { render, screen } from '@testing-library/react';
import AddCampaign from './AddCampaign';

test('renders AddCampaign', () => {
  render(<AddCampaign />);
});

test('renders AddCampaign and has create button', () => {
  render(<AddCampaign />);
  const addButton = screen.getByText(/Add Campaign/i);
  expect(addButton).toBeInTheDocument();
});
