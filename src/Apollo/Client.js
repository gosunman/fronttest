import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: "http://13.125.100.203:3999",
  clientState: {
    defaults,
    resolvers
  }
});
