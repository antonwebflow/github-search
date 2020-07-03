import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const SEARCH_QUERY = gql`
  query($search_term: String!) {
    search(query: $search_term, type: USER, first: 3) {
      userCount
      edges {
        node {
          ... on User {
            name
            email
            avatarUrl
            url
          }
        }
      }
    }
  }
`;

const Search: React.FC = () => {
  const { data } = useQuery(SEARCH_QUERY, {
    variables: {
      search_term: 'test',
    },
  });

  console.log(data);

  return <></>;
};

export default Search;
