const { ApolloServer, gql }  = require('apollo-server')

const resolvers = {
    Query: {
        hello() {
            return 'hello word'
        }
    }
}

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()