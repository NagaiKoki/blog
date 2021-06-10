import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLinkUri = (): string => {
  const env = process.env.NODE_ENV;

  switch (env) {
    case "development":
    case "production": {
      return "https://one-seahorse-56.hasura.app/v1/graphql";
    }
  }
};

export const httpLink = createHttpLink({
  uri: httpLinkUri(),
  headers: {
    "x-hasura-admin-secret": `f2oxCUSW5enzIiJFtoKXFf5zHYLFjMcxNSYbhV7Z6HXO3fxF3nm8Ye85BUIex0KX`,
  },
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.HASURA_ADMIN_SECRET_KEY}`,
    },
  };
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
