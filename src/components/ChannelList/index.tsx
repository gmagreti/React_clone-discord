import React from 'react';
import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="CSGO" />
      <ChannelButton channelName="Mario Oddysey" />
      <ChannelButton channelName="Mario Maker 2" />
      <ChannelButton channelName="Splaton2" />
    </Container>
  );
};

export default ChannelList;
