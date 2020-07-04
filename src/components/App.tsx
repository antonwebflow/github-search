import React from 'react';
import apolloClient from '../apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import SearchContainer from './SearchContainer';
import GlobalStyle from '../globalStyles';

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStyle />
    <SearchContainer />
  </ApolloProvider>
);
