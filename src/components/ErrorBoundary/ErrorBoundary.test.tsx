import React from 'react';
import { render } from '@testing-library/react';

import ErrorBoundary from './ErrorBoundary';

const ThrowHelper = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('some-error');
  } else {
    return null;
  }
};

describe('ErrorBoundary', () => {
  // @ts-ignore
  let jestSpy: jest.SpyInstance;

  beforeAll(() => {
    jestSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    ((console.error as unknown) as jest.SpyInstance).mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders error', () => {
    const { rerender, getByRole } = render(
      <ThrowHelper shouldThrow={false} />,
      {
        wrapper: ErrorBoundary,
      }
    );

    rerender(<ThrowHelper shouldThrow={true} />);

    expect(getByRole('alert').textContent).toMatchInlineSnapshot(
      `"Something went wrong"`
    );
  });
});
