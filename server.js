// const cors = require('cors');
const express = require('express');
const db = require('./db');
const { ApolloServer, gql } = require('apollo-server-express');

const port = process.env.PORT || 9000;
const app = express();

const fs = require('fs');
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`;
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:9000${server.graphqlPath}`)
);
