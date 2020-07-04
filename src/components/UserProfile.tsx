import React from 'react';
import { Search_search_edges_node } from '../generated/apollo/Search';
import RepositoryListItem from './RepositoryListItem';

const UserProfile: React.FC<{ profile: Search_search_edges_node }> = ({
  profile,
}) => {
  if (profile.__typename !== 'User') return null;

  const { avatarUrl, email, name, url } = profile;
  return (
    <>
      <img src={avatarUrl} />
      {name && <p>{name}</p>}
      {name && <p>{email}</p>}
      <a href={url}>Profile</a>
      {profile.repositories.nodes?.map((r, index) => (
        <RepositoryListItem repo={r!} key={index} />
      ))}
    </>
  );
};
export default UserProfile;
