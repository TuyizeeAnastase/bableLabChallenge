import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import "dotenv/config";
import mongoose from "mongoose";
import { country as countryModel } from "./models/country";
import Countries from "./dataSources/countries";

const db_url = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const main = async () => {
  await mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

main()
  .then(console.log("Database connected successfully"))
  .catch((error) => console.error(error));

const dataSources = () => ({
  countries: new Countries(countryModel),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server.listen({ port: PORT || 4000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
