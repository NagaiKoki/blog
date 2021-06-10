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
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_SECRET_KEY,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
