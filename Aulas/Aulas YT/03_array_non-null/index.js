const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        nome: String
        tecnologias: [String!]!
    }
`

const resolvers = {
    Query: {
        nome() {
            return 'Mario'
        },
        tecnologias() {
            return ['java', 'react']
        }
    }
}




const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen()