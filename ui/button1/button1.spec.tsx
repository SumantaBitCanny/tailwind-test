import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton1 } from './button1.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicButton1 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
