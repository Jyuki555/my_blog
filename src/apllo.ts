import { ApolloClient, InMemoryCache } from "@apollo/client";

//const { REACT_APP_SPACE, REACT_APP_TOKEN } = process.env;

export const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/1onbsimlancg?access_token=Yaz1M6moQmRQ4r8IZUtzsjheW-IvWQqTWHTkphYgJ9A`,
  cache: new InMemoryCache(),
});
