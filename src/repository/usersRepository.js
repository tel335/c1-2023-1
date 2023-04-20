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

  exports.searchUser = (userData) => {
    let foundUser = users.filter((user) => (user.name.toLowerCase().includes(userData.name.toLowerCase()) && 
                                        user.email.toLowerCase().includes(userData.email.toLowerCase()) &&
                                        user.isActive == userData.isActive &&
                                        user.age == userData.age &&
                                        user.company.toLowerCase().includes(userData.company.toLowerCase())
                                        )
                                        );
    if(foundUser.length == 0){
        foundUser = -1
    }
    console.log(foundUser)
    return foundUser
  }