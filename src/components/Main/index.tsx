import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo,
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BeltIcon,
    EmailIcon
} from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Matheus Santos</strong>
                  <span>1343 Tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          <BottomMenu>
              <HomeIcon className='active' />
              <SearchIcon />
              <BeltIcon />
              <EmailIcon />
          </BottomMenu>
      </Container>  
  );
}

export default Main;