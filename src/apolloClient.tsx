import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionResult from '../fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({
  fragmentMatcher,
});

const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
  cache,
});

export default apolloClient;
