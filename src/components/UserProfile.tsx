import React from 'react';
import { Search_search_edges_node } from '../generated/apollo/Search';
import RepositoryListItem from './RepositoryListItem';
import Sort from './Sort';
import { MdOpenInNew } from 'react-icons/all';

const UserProfile: React.FC<{ profile: Search_search_edges_node }> = ({
  profile,
}) => {
  if (profile.__typename !== 'User') return null;

  const { avatarUrl, email, name, url } = profile;

  return (
    <>
      <img src={avatarUrl} height="200px" />
      <h1>{name}</h1>
      {email && <p>{email}</p>}
      <h2>
        <a target="_blank" rel="noopener" href={url}>
          {url} <MdOpenInNew />
        </a>
      </h2>

      <Sort />

      {profile.repositories.nodes?.map((r, index) => (
        <RepositoryListItem repo={r!} key={index} />
      ))}
    </>
  );
};
export default UserProfile;
