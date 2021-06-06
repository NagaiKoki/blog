import { gql } from "@apollo/client";

export const GET_POSTS_QUERY = gql`
  {
    posts {
      id
      title
      content
    }
  }
`;

export const GET_POST_QUERY = gql`
  query GetPost($id: Int!) {
    posts(where: { id: { _eq: $id } }) {
      id
      title
      content
    }
  }
`;
