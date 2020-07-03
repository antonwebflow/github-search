import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';
import {
  Search as SearchData,
  SearchVariables,
} from '../generated/apollo/Search';

const SEARCH_QUERY = gql`
  query Search($search_term: String!) {
    search(query: $search_term, type: USER, first: 3) {
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
  const [searchTerm, setSearchTerm] = useState('hello');

  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const { data } = useQuery<SearchData, SearchVariables>(SEARCH_QUERY, {
    variables: {
      search_term: debouncedSearchTerm,
    },
  });

  console.log(data);

  return (
    <>
      <input onChange={(e) => setSearchTerm(e.target.value)} />
    </>
  );
};

export default Search;
