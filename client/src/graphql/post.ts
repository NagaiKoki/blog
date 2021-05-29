import { gql } from "@apollo/client";

export const GET_POSTS_QUERY = gql`
  {
    posts {
      id
      title
      content
      createdAt
    }
  }
`;

export const GET_POST_QUERY = gql`
  query GetPost($id: Int!) {
    post(id: $id) {
      id
      title
      content
    }
  }
`;
