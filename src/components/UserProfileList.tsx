import React from 'react';
import UserProfile from './UserProfile';
import { Search_search_edges } from '../generated/apollo/Search';

const UserProfileList: React.FC<{
  profiles: (Search_search_edges | null)[];
}> = ({ profiles }) => (
  <>
    {profiles &&
      profiles.map((profile, index) => (
        <UserProfile key={index} profile={profile!.node!} />
      ))}
  </>
);

export default UserProfileList;
