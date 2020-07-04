import { gql } from 'apollo-boost';

export const SEARCH_QUERY = gql`
  query Search($search_term: String!) {
    search(query: $search_term, type: USER, first: 1) {
      edges {
        node {
          ... on User {
            name
            email
            avatarUrl
            url
            repositories(first: 100, orderBy: { field: NAME, direction: ASC }) {
              nodes {
                name
                description
                url
              }
            }
          }
        }
      }
    }
  }
`;
