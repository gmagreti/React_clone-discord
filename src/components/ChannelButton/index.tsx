import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface ButtonProps {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<ButtonProps> = ({ channelName, selected }) => {
  return (
    <Container>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
