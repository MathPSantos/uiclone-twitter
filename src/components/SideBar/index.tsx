import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Deni Pires" nickname="@deni_pires" />,
              <FollowSugestion name="Alberto Santos" nickname="@alberto_santos" />,
              <FollowSugestion name="Marcos Roberto" nickname="@marquinho_de_nete" />,
              <FollowSugestion name="Simone Silva" nickname="@simsilva" />,
              <FollowSugestion name="Monique Pires" nickname="@mohpires" />,
              <FollowSugestion name="Vitor Souza" nickname="@vitor2008" />,
              <FollowSugestion name="Giovanna Avi" nickname="@gihgihavi" />,
              <FollowSugestion name="Josias Calebe" nickname="@jcalebe" />,
              <FollowSugestion name="Helena Strada" nickname="@hroad" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
