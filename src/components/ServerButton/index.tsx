import React from 'react';

import { Button } from './styles';

import Logo from '../../assets/logo.svg'

export interface ButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ButtonProps> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      className={selected ? "active" : ""}
      mentions={mentions}
    >
      {isHome && <img src={Logo} alt="Logo RC - RCARRENHO"></img>}
    </Button>
  )
}

export default ServerButton;