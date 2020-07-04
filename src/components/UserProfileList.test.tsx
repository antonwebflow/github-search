import React from 'react';
import { render } from '@testing-library/react';
import UserProfileList from './UserProfileList';

describe('UserProfileList', () => {
  it('should render the country info', async () => {
    const { getByText } = render(<UserProfileList profiles={[]} />);
    getByText(/We couldn’t/i);
  });
});
