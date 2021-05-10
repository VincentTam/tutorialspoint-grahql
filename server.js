// const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const PORT = process.env.PORT || 9000;
const app = express();

const fs = require('fs');
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`;
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀 Server ready at port ${PORT}`);
});
