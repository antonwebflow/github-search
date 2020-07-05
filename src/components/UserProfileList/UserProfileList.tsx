import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import { Search_search_edges } from '../../generated/apollo/Search';

const UserProfileList: React.FC<{
  profiles: (Search_search_edges | null)[];
}> = ({ profiles }) => {
  if (profiles.length === 0)
    return <>We couldn’t find any users matching your request</>;
  return (
    <>
      {profiles &&
        profiles.map((profile, index) => (
          <UserProfile key={index} profile={profile!.node!} />
        ))}
    </>
  );
};

export default UserProfileList;
