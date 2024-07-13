// import apollo server
// o modulo gql faz o javascript interpretar o que esta escrito na linguagem do GraphQL
const { ApolloServer, gql } = require("apollo-server");
const userSchema = require("./api/user/schema/user.graphql");
const userResolvers = require("./api/user/resolvers/userResolvers.js")

const UsersAPI = require('../01_aula/api/user/datasourse/user.js')
const typeDefs = [userSchema];
const resolvers = [userResolvers]

// recebe os types importados
// os tipos sao definidos e exportados no arquivo user.graphql

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    dataSources: () => {
        return {
            usersAPI: new UsersAPI()
        }
    }
});

server.listen().then(({ url }) => {
    console.log(`Servidor rodando na porta ${url}`);
});





// const { ApolloServer, gql } = require('apollo-server')

// const resolvers = {
//     Query: {
//         hello() {
//             return "Word"
//         }
//     }
// }

// const typeDefs = gql`
//     type Query {
//         hello: String
//     }

// `

// const server = new ApolloServer({ typeDefs, resolvers})

// server.listen()
