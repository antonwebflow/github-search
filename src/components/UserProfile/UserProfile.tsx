import React from 'react';
import { Search_search_edges_node } from '../../generated/apollo/Search';
import RepositoryListItem from '../RepositoryListItem';
import Sort from '../Sort/Sort';
import { MdOpenInNew } from 'react-icons/md';
import { UserProfileStyled } from './UserProfileStyled';
import { RepositoriesListStyled } from '../RepositoriesListStyled';

const UserProfile: React.FC<{ profile: Search_search_edges_node }> = ({
  profile,
}) => {
  if (profile.__typename !== 'User') return null;

  const { avatarUrl, email, login, url } = profile;

  return (
    <>
      <UserProfileStyled>
        <img src={avatarUrl} />
        <div>
          <h1>{login}</h1>
          {email && <p>{email}</p>}
          <a target="_blank" rel="noopener" href={url}>
            {url} <MdOpenInNew />
          </a>
        </div>
      </UserProfileStyled>

      <RepositoriesListStyled>
        <h3>Repositories</h3>
        <Sort />
        {profile.repositories.nodes?.map((r, index) => (
          <RepositoryListItem repo={r!} key={index} />
        ))}
      </RepositoriesListStyled>
    </>
  );
};
export default UserProfile;
