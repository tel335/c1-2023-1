import dataset from '../dataset/users_info.json'

let users = []
users = dataset

exports.getUsersFromDataset = () => {
    return dataset
}

exports.getActiveUsers = (name) => {
    // Se revisa si algun producto tiene la categoria
    let activeUsers = users.filter((user) => (user.isActive && user.name.toLowerCase().includes(name.toLowerCase())));

    console.log(activeUsers)
  
    // Se retornan los productos
    return activeUsers
  }

  exports.searchUser = (userParams) => {
    let foundUser = users.filter((user) => (
                                        (!userParams.name || user.name.toLowerCase().includes(userParams.name.toLowerCase())) && 
                                        (!userParams.email || user.email.toLowerCase().includes(userParams.email.toLowerCase())) &&
                                        (!userParams.isActive || user.isActive == userParams.isActive) &&
                                        (!userParams.age || user.age == userParams.age) &&
                                        (!userParams.company || user.company.toLowerCase().includes(userParams.company.toLowerCase()))
                                        )
                                        );
    if(foundUser.length == 0){
        foundUser = -1
    }
    console.log(foundUser)
    return foundUser
  }