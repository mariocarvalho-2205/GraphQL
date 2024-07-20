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
    },
    {
        id: 3,
        nome: 'Sergio',
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
        usuario(id: Int, nome: String): Usuario
        produto(id: Int, marca: String): Produto
        
    }
`
// o ideal e nao deixar retorna null, atraves do tratamento 
// e sim sem usar a exclamação no typeDefs
const resolvers = {
    Query: {
        usuarios() {
            return usuarios
        },
        // criando uma função para validar se o id existe
        usuario(_, args) {
            const { id, nome } = args // desestruturando o args
            if (id) {
                return usuarios.find((usuario) => usuario.id === id) // fazendo a validação pelo id
            } else {

                return usuarios.find((usuario) => usuario.nome === nome) // fazendo a validação pelo nome
            }
        },
        produto(_, args) {
            const { id, marca } = args
            if (marca) {
                return produtos.find((produto) => produto.marca === marca)
            }
            return produtos.find((produto) => produto.id === id)
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

