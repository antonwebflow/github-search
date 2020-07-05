import React from 'react';
import apolloClient from '../apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import SearchContainer from './SearchContainer';
import GlobalStyle from '../globalStyles';
import { LayoutStyled } from './LayoutStyled';
import { LayoutContainerStyled } from './LayoutContainerStyled';

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStyle />
    <LayoutStyled>
      <LayoutContainerStyled>
        <SearchContainer />
      </LayoutContainerStyled>
    </LayoutStyled>
  </ApolloProvider>
);
