import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';
import styled from 'styled-components';
import {
  Search as SearchData,
  Search_search_edges,
  SearchVariables,
} from '../generated/apollo/Search';
import UserProfileList from './UserProfileList';
import { SEARCH_QUERY } from '../queries/search';
import { OrderDirection } from '../generated/apollo/globalTypes';
import { SortDirectionContext } from './SortDirectionContext';

const SearchInput = styled.div`
  label {
    margin-right: 0.3rem;
  }
  padding-bottom: 0.5rem;
`;

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('antonwebflow');

  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const [direction, setDirection] = useState(OrderDirection.ASC);

  const { data } = useQuery<SearchData, SearchVariables>(SEARCH_QUERY, {
    variables: {
      search_term: debouncedSearchTerm,
      direction: direction,
    },
  });

  console.log(data);
  const profiles = data?.search?.edges ? data.search.edges : null;

  return (
    <SortDirectionContext.Provider value={{ direction, setDirection }}>
      <SearchInput>
        <label htmlFor="search">Search</label>
        <input id="search" onChange={(e) => setSearchTerm(e.target.value)} />
      </SearchInput>

      {profiles && (
        <UserProfileList
          profiles={(profiles as unknown) as Search_search_edges[]}
        />
      )}
    </SortDirectionContext.Provider>
  );
};

export default Search;
