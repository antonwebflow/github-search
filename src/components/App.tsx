import React from 'react';
import apolloClient from '../apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import Search from './Search';
import GlobalStyle from '../globalStyles';

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStyle />
    <Search />
  </ApolloProvider>
);
