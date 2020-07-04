import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { Search_search_edges_node_User_repositories_nodes } from '../generated/apollo/Search';

const RepositoryListItem: React.FC<{
  repo: Search_search_edges_node_User_repositories_nodes;
}> = ({ repo: { description, name, url } }) => {
  return (
    <>
      <h3>
        <a target="_blank" rel="noopener" href={url}>
          {name} <MdOpenInNew />
        </a>
      </h3>
      {description && <p>{description}</p>}
    </>
  );
};

export default RepositoryListItem;
