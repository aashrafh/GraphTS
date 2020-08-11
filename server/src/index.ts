import express from "express";
// import bodyParser from "body-parser";
// import { listings } from "./listings";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql/index";

const PORT = 9000;
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

// app.use(bodyParser.json());

server.applyMiddleware({ app, path: "/api" });

// app.get("/listings", (_req, res) => {
//   res.send(listings);
// });
// app.post("delete-listing", (req, res) => {
//   const id: string = req.body.id;

//   for (let i = 0; i < listings.length; i++)
//     if (listings[i].id === id) return res.send(listings.splice(i, 1)[0]);

//   return res.send("Failed to Delete Listing");
// });

app.listen(PORT);

console.log(`[app]: http:localhost:${PORT}`);
