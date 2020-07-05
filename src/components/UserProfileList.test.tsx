import React from 'react';
import { render } from '@testing-library/react';
import UserProfileList from './UserProfileList';
import { Search_search_edges } from '../generated/apollo/Search';

describe('UserProfileList', () => {
  let profilesMock: (Search_search_edges | null)[];

  describe('given no profiles', () => {
    it("renders 'we couldn’t find' text", async () => {
      const { getByText } = render(<UserProfileList profiles={[]} />);
      getByText(/We couldn’t find/i);
    });
  });

  describe('given one profile', () => {
    profilesMock = [
      {
        __typename: 'SearchResultItemEdge',
        node: {
          avatarUrl: '',
          email: '',
          login: 'some-login',
          url: 'https://some-url',
          __typename: 'User',
          repositories: {
            __typename: 'RepositoryConnection',
            nodes: [
              {
                description: 'some-descr',
                url: 'https://some-url',
                name: 'some-name',
                __typename: 'Repository',
              },
            ],
          },
        },
      },
    ];
    it("renders user's login", () => {
      const { getByText } = render(<UserProfileList profiles={profilesMock} />);
      getByText(/some-login/);
    });
  });
});
