const { ApolloServer, gql } = require('apollo-server')


const typeDefs = gql`
    type Query {
        nome: String
        idade: Int
        email: String
        salario: Float
        ativo: Boolean
        id: ID
    }
`

const resolvers = {
     Query: {
        nome() {
            return 'Mario'
        },
        idade() {
            return 25
        },
        email() {
            return 'mario@gmail.com'
        },
        salario() {
            return 1000.50
        },
        ativo() {
            return true
        },
        id() {
            return '123456789'
        }
    }
}



const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()