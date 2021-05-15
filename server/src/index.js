const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const fs = require("fs");
const path = require("path");
const resolvers = require("./resolvers");

const port = 4000;
const gqlPath = "/graphql";

const app = express();

const typeDefs = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);

let server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, gqlPath });
app.listen(port, () => console.info(`Server started on port ${port}`));
