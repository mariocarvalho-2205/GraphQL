const { ApolloServer, gql } = require("apollo-server")

const db = [
  {
    id: 1,
    nome: "Mario",
    email: "mario@gmail.com",
    idade: 30,
    salario_liquido: 1234.56,
    vip: true,
    perfil: 1,
  },
  {
    id: 2,
    nome: "Joao",
    email: "joao@gmail.com",
    idade: 30,
    salario_liquido: 1500.56,
    vip: false,
    perfil: 2,
  },
  {
    id: 3,
    nome: "Maria",
    email: "maria@gmail.com",
    idade: 30,
    salario_liquido: 2000.99,
    vip: true,
    perfil: 1,
  },
];

// lista de perfis para fazer relacionamento
const perfis = [
    { id: 1, descricao: "Normal" },
    { id: 2, descricao: "Administrador" }
]

//// definir os types e os campos
//! OBS: os comentarios não podem ser colocados dentro do gql
const typeDefs = gql`
    type Usuario {
        id: Int
        nome: String
        email: String
        idade: Int
        salario_real: Float
        vip: Boolean
        perfil: Perfil
    }

    type Perfil {
        id: Int
        descricao: String
    }

    type Query {
        usuario (id: Int): Usuario
        perfis: [Perfil]
    }
`;

const resolvers = {
    // criando resolver para o campo usuario
    // esse resolver ira resolver o problema que nao foi localizado pela query por conta do nome da chave estar diferente
    Usuario: {
        salario_real(obj) { // atraves do obj, pegamos todo o objeto e fazermos  a validação e retornamos o valor
            // console.log(obj)
            return obj.salario_liquido
        },
        perfil(obj) {
            console.log(obj)
            return perfis.find(p => p.id === obj.perfil)
        }

    },


    Query: {
        usuario(_, args) {
            return db.find(u => u.id === args.id)
        },
        perfis() {
            return perfis
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()