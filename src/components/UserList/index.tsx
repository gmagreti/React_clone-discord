import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Gabriel Magreti" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Alguem" isBot />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="gBMagreti" />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Ciclano" isBot />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="_X][Elitee." isBot />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Fulano" isBot />
      <UserRow nickname="Beltrano" />
    </Container>
  );
};

export default UserList;
