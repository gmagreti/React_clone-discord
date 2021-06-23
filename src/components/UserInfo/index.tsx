import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  HeadphoneIcon,
  MicIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Gabriel Magreti</strong>
          <span>#010101</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
