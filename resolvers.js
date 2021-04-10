module.exports = {
    Query: {
        videogames: async (_, __, { dataSources }) =>
            await dataSources.VideogameDAO.all(),
        videogame: async (_, { id }, { dataSources }) =>
            await dataSources.VideogameDAO.get(id),
        users: async (_, __, { dataSources }) =>
            await dataSources.UserDAO.all(),
        user: async (_, { id }, { dataSources }) =>
            await dataSources.UserDAO.get(id),
    },

    Videogame: {
        eman: async ({ name }) => name.split("").reverse().join(""),
        score: async ({ id }, _, { dataSources }) =>
            await dataSources.ScoreDAO.GetScoreVideogame(id),
        count: async ({ id }, _, { dataSources }) =>
            await dataSources.ScoreDAO.GetCountVideogame(id),
        scores: async ({ id }, _, { dataSources }) =>
            await dataSources.ScoreDAO.GetScoresVideogame(id),
    },

    User: {
        scores: async ({ id }, _, { dataSources }) =>
            await dataSources.ScoreDAO.GetScoresUser(id),
    },

    Score: {
        videogame: async ({ videogame }, _, { dataSources }) =>
            await dataSources.VideogameDAO.get(videogame),
        user: async ({ user }, _, { dataSources }) =>
            await dataSources.UserDAO.get(user),
    },
};
