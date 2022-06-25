import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u79we70l6301tag17rcmdy/master',
  cache: new InMemoryCache(),
});

export default client;
