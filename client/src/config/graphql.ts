import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

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
    "x-hasura-admin-secret": 'f2oxCUSW5enzIiJFtoKXFf5zHYLFjMcxNSYbhV7Z6HXO3fxF3nm8Ye85BUIex0KX',
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
