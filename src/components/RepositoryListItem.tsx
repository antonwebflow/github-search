import React from 'react';
import { Search_search_edges_node_User_repositories_nodes } from '../generated/apollo/Search';

const RepositoryListItem: React.FC<{
  repo: Search_search_edges_node_User_repositories_nodes;
}> = ({ repo: { description, name, url } }) => {
  return (
    <>
      <p>
        <a href={url}>{name}</a>
      </p>
      {description && <p>{description}</p>}
    </>
  );
};

export default RepositoryListItem;
