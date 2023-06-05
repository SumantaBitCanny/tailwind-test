import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard } from './card.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicCard />);
  const rendered = getByText('Noteworthy technology acquisitions 2021');
  expect(rendered).toBeTruthy();
});
