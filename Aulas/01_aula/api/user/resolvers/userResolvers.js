const arrayUsers = [
  {
    nome: "Ana",
    ativo: true,
    email: "ana@gmail.com"
  },
  {
    nome: "Marcia",
    ativo: false,
  },
];

const useResolvers = {
    Query: {
        users() {
            return arrayUsers;
        },
        primeiroUser: () => arrayUsers[0]
    }
};

module.exports = useResolvers;
