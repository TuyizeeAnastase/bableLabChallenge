import { country } from "./models/country";

export const resolvers = {
  Query: {
    getCountries: async (parent, args) => {
      try {
        const response = await country.find();
        return response;
      } catch (error) {
        throw new Error(error);
      }
    },
    getCountry: async (parent, args) => {
      try {
        const { id } = args;
        const response = await country.findById(id);
        if (!response) {
          const message = new Error("No country found!");
          message.code = 404;
          throw message;
        }
        return response;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    addCountry: async (parent, args) => {
      try {
        const country_info = {
          country_name: args.country_name,
          area: args.area,
          year: args.year,
          total_population: args.total_population,
        };
        return await country.create(country_info);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateCountry: async (parent, args) => {
      try {
        const { _id } = args;
        const { country_name, area, year, total_population } = args;
        const res = await country.findById(_id);
        if (!res) {
          const message = new Error("No country found!");
          message.code = 404;
          throw message;
        }
        return await country.findByIdAndUpdate(
          _id,
          { country_name, area, year, total_population },
          { new: true }
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteCountry: async (parent, args) => {
      try {
        const { id } = args;
        const res = await country.findById(id);
        if (!res) {
          const message = new Error("No country found!");
          message.code = 404;
          throw error;
        }
        await country.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
