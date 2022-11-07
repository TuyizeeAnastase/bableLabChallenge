import { gql } from "apollo-server";

export const typeDefs = gql`
  type Country {
    _id: ID!
    country_name: String!
    year: String!
    area: Int!
    total_population: Int!
  }

  type Query {
    hello: String
    getCountries: [Country]!
    getCountry(id: ID!): Country!
  }

  type Mutation {
    addCountry(
      country_name: String!
      year: String!
      area: Int!
      total_population: Int!
    ): Country!
    updateCountry(
      _id: ID!
      country_name: String!
      year: String!
      area: Int!
      total_population: Int!
    ): Country!
    deleteCountry(id: ID!): String!
  }
`;
