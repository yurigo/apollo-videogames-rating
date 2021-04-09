require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

const VideogameDAO = require("./datasource/videogameDAO");
const UserDAO = require("./datasource/userDAO");
const ScoreDAO = require("./datasource/scoreDAO");

// const server = new ApolloServer({ typeDefs });

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        // RestauranteAPI: new RestauranteAPI(),
        // UsuarioAPI: new UsuarioAPI(),
        // PuntuacionAPI: new PuntuacionAPI(),
        VideogameDAO: new VideogameDAO(),
        UserDAO: new UserDAO(),
        ScoreDAO: new ScoreDAO(),
    }),
});

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
