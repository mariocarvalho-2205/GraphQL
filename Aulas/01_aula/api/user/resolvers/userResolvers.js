
const useResolvers = {
    Query: {
        users: (  dataSources ) => { 
          // root trabalha com o nivel anterior
          // args trabalha com os argumentos que foram passados
          // dataSources trabalha com os dados que foram importados no arquivo index.js
          // info trabalha com as informações do schema
          dataSources.usersAPI.getUsers()
        }
        
    }
};

module.exports = useResolvers;
