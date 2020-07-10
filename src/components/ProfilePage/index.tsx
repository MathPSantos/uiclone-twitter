import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar, 
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Matheus Santos</h1>
        <h2>@mathpsantos</h2>

        <p>I'm a Developer and Designer at Ifinity</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de junho de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>32</strong>
          </span>
          <span>
            <strong>54 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
