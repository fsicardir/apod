import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders paragraph', () => {
  const { getByText } = render(<App />);
  const paragraph = getByText(/Nothing here/i);
  expect(paragraph).toBeInTheDocument();
});
