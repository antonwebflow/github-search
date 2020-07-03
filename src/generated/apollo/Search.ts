/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Search
// ====================================================

export interface Search_search_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "Repository";
}

export interface Search_search_edges_node_User {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The user's publicly visible profile email.
   */
  email: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The HTTP URL for this user
   */
  url: any;
}

export type Search_search_edges_node = Search_search_edges_node_App | Search_search_edges_node_User;

export interface Search_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: Search_search_edges_node | null;
}

export interface Search_search {
  __typename: "SearchResultItemConnection";
  /**
   * A list of edges.
   */
  edges: (Search_search_edges | null)[] | null;
}

export interface Search {
  /**
   * Perform a search across resources.
   */
  search: Search_search;
}

export interface SearchVariables {
  search_term: string;
}
