import React from 'react';

import List from '../List';
import FollowSugestion from '../FollowSugestion';

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

      <Body>
        <List 
          title="Talvez você curta" 
          elements={[
            <FollowSugestion 
              name="Deni Pires"
              nickname="@deni_pires"
            />,
            <FollowSugestion 
              name="Alberto Santos"
              nickname="@alberto_santos"
            />,
            <FollowSugestion 
              name="Simone Silva"
              nickname="@sinsilva"
            />,
            <FollowSugestion 
              name="Marcos Roberto"
              nickname="@marquinhosdenete"
            />,
            <FollowSugestion 
              name="Monique Pires"
              nickname="@mohpires"
            />,
            <FollowSugestion 
              name="Vitor Souza"
              nickname="@vitor2008"
            />,
            <FollowSugestion 
              name="Giovanna Avi"
              nickname="@gihgihavi"
            />,
            <FollowSugestion 
              name="Josias Calebe"
              nickname="@jcalebe"
            />,
            <FollowSugestion 
              name="Helena Strada"
              nickname="@hroad"
            />,
          ]} 
        />

        <List
          title="Talvez você curta"
          elements={[
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>,
          ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
