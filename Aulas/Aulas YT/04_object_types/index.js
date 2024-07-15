const { ApolloServer, gql } = require('apollo-server')

const usuarios = [
    {
        id: 1,
        nome: 'Joao',
        ativo: true
    },
    {
        id: 2,
        nome: 'Mario',
        ativo: false
    }
]
const produtos = [
    {
        id: 1,
        nome: 'Bateria',
        marca: 'Pearl'
    },
    {
        id: 2,
        nome: 'Guitarra',
        marca: 'Fender'
    }
]

// criando schema
const typeDefs = gql`
    type Usuario {
        id: ID
        nome: String
        ativo: Boolean
    }

    type Produto {
        id: ID
        nome: String
        marca: String
    }

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
    }
`

const resolvers = {
    Query: {
        usuarios() {
            return usuarios
        },
        produtos() {
            return produtos
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()