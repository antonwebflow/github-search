import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';
import {
  Search as SearchData,
  Search_search_edges,
  SearchVariables,
} from '../generated/apollo/Search';
import UserProfileList from './UserProfileList';
import { SEARCH_QUERY } from '../queries/search';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('antonwebflow');

  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const { data } = useQuery<SearchData, SearchVariables>(SEARCH_QUERY, {
    variables: {
      search_term: debouncedSearchTerm,
    },
  });

  console.log(data);
  const profiles = data?.search?.edges ? data.search.edges : null;

  return (
    <>
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {profiles && (
        <UserProfileList
          profiles={(profiles as unknown) as Search_search_edges[]}
        />
      )}
    </>
  );
};

export default Search;
