// import apollo server
// o modulo gql faz o javascript interpretar o que esta escrito na linguagem do GraphQL
const { ApolloServer } =  require("apollo-server")
const userSchema = require('./api/user/schema/user.graphql')
const users = [
    {
        nome: "Ana",
        ativo: true
    },
    {
        nome: "Marcia",
        ativo: false
    }
]
// os tipos sao definidos e exportados no arquivo user.graphql
const typeDefs = [userSchema]  // recebe os types importados

const resolvers = {}

const server = new ApolloServer({typeDefs, resolvers})

server.listen()