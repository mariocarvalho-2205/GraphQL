const { ApolloServer, gql } = require("apollo-server");

const usuarios = [
  {
    id: 1,
    nome: "Joao",
    ativo: true,
  },
  {
    id: 2,
    nome: "Mario",
    ativo: false,
  },
  {
    id: 3,
    nome: "Sergio",
    ativo: false,
  },
];

const produtos = [
  {
    id: 1,
    nome: "Bateria",
    marca: "Pearl",
  },
  {
    id: 2,
    nome: "Guitarra",
    marca: "Fender",
  },
];

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
`;
// o ideal e nao deixar retorna null, atraves do tratamento
// e sim sem usar a exclamação no typeDefs
const resolvers = {
  Query: {
    usuarios() {
      return usuarios;
    },
    // criando uma função para validar se o id existe

    usuario(_, args) {
      // recebe dois argumentos 1- objeto vazio e 2- args
      const { id, nome } = args; // desestruturando o args
      /*
        Sintaxe no Playground
        query {  //// Na hora da consulta, ele prioriza o argumento que esta sendo validado no if
        usuario(id: 1) {  //// se tiver id e nome, ele vai validar o id primeiro e nem vai pesquisar o nome
                id
                nome
                ativo
            }
        }
        */
      if (id) {
        return usuarios.find((usuario) => usuario.id === id); // fazendo a validação pelo id
      } else {
        return usuarios.find((usuario) => usuario.nome === nome); // fazendo a validação pelo nome
      }
    },
    produto(_, args) {
      const { id, marca } = args;
      if (marca) {
        return produtos.find((produto) => produto.marca === marca);
      }
      return produtos.find((produto) => produto.id === id);
    },
    produtos() {
      return produtos;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen();
