module.exports = {
    Query: {
        videogames: async (_, __, { dataSources }) => {
            let data = await dataSources.VideogameDAO.all();
            data = data.map((e) => {
                e.eman = e.name.split("").reverse().join("");
                return e;
            });
            return data;
        },
        videogame: async (_, { id }, { dataSources }) =>
            await dataSources.VideogameDAO.get(id),
        users: async (_, __, { dataSources }) =>
            await dataSources.UserDAO.all(),
        user: async (_, { id }, { dataSources }) =>
            await dataSources.UserDAO.get(id),
    },

    // Mutation: {
    //     videogame: async (_, args, { dataSources }) => {
    //         const restaurante = {};
    //         restaurante.nombre = args.nombre ? args.nombre : undefined;
    //         restaurante.x = args.x ? args.x : undefined;
    //         restaurante.y = args.y ? args.y : undefined;
    //         let response = await dataSources.RestauranteDAO.insert(restaurante);
    //         restaurante.id = response.insertId;
    //         return restaurante;
    //     },
    //     user: async (_, args, { dataSources }) => {
    //         const usuario = {};
    //         usuario.nombre = args.nombre;
    //         usuario.login = args.login;
    //         let response = await dataSources.UsuarioDAO.insert(usuario);
    //         usuario.id = response.insertId;
    //         return usuario;
    //     },
    //     score: async (_, args, { dataSources }) => {
    //         const puntuacion = {};
    //         puntuacion.restaurante = args.restaurante;
    //         puntuacion.usuario = args.usuario;
    //         puntuacion.valoracion = args.valoracion;

    //         console.log(puntuacion);

    //         let response = await dataSources.PuntuacionDAO.puntua(puntuacion);
    //         return puntuacion;
    //     },
    // },

    Videogame: {
        scores: async ({ id }, _, { dataSources }) =>
            await dataSources.ScoreDAO.GetScoreVideogame(id),
    },

    User: {
        scores: async ({ id }, _, { dataSources }) =>
            await dataSources.ScoreDAO.GetScoreUser(id),
    },

    Score: {
        videogame: async ({ videogame }, _, { dataSources }) =>
            await dataSources.VideogameDAO.get(videogame),
        user: async ({ user }, _, { dataSources }) =>
            await dataSources.UserDAO.get(user),
    },
};
