import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList
} from "graphql";
import { listings } from "./listings";

const Listing = new GraphQLObjectType({
  name: "Listing",
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLInt) },
    address: { type: GraphQLNonNull(GraphQLInt) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numOfGuests: { type: GraphQLNonNull(GraphQLInt) },
    numOfBeds: { type: GraphQLNonNull(GraphQLInt) },
    numOfBaths: { type: GraphQLNonNull(GraphQLInt) },
    rating: { type: GraphQLNonNull(GraphQLFloat) }
  }
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    listings: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Listing))),
      resolve: () => listings
    }
  }
});
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteListing: {
      type: GraphQLNonNull(Listing),
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve: (_root, { id }) => {
        for (let i = 0; i < listings.length; i++)
          if (listings[i].id === id) {
            return listings.splice(i, 1)[0];
          }
        throw new Error("failed to delete listings");
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query,
  mutation
});
