import { createHttpLink } from "@apollo/client";

const httpLinkUri = (): string => {
  const env = process.env.NODE_ENV;

  switch (env) {
    case "development": {
      return "http://localhost:4000/graphql";
    }
  }
};

export const httpLink = createHttpLink({
  uri: httpLinkUri(),
});
