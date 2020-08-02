import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';
import {
  Search as SearchData,
  Search_search_edges,
  SearchVariables,
} from '../generated/apollo/Search';
import UserProfileList from './UserProfileList/UserProfileList';
import { SEARCH_QUERY } from '../queries/search';
import { OrderDirection } from '../generated/apollo/globalTypes';
import { SortDirectionContext } from './SortDirectionContext';
import { SearchInputStyled } from './SearchInputStyled';

const SearchContainer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const [direction, setDirection] = useState(OrderDirection.ASC);

  const { data, loading, error } = useQuery<SearchData, SearchVariables>(
    SEARCH_QUERY,
    {
      variables: {
        search_term: debouncedSearchTerm,
        direction: direction,
      },
    }
  );

  const profiles = data?.search?.edges ?? data?.search.edges;

  return (
    <SortDirectionContext.Provider value={{ direction, setDirection }}>
      <SearchInputStyled>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          value={searchTerm}
          placeholder="Enter Github username"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchInputStyled>

      {loading ? (
        <>Loading...</>
      ) : (
        searchTerm.length !== 0 &&
        profiles && (
          <UserProfileList
            profiles={(profiles as unknown) as Search_search_edges[]}
          />
        )
      )}

      {error ? <>{error}</> : null}
    </SortDirectionContext.Provider>
  );
};

export default SearchContainer;
