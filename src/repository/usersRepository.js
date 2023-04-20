import dataset from '../dataset/users_info.json'
let users = []
users = dataset



exports.getActiveUsersByName = (userName) => {

    let active_users = users.filter((user) => (user.isActive && user.name.toLowerCase().includes(userName.toLowerCase()) ))
    

    if (active_users.length == 0) {
        return -1
    }

    active_users.sort((user_1, user_2) => (user_1.age <= user_2.age? 1 : (user_1.age > user_2.age)? -1 : 0))

    return active_users
}


exports.findUser = (userData) => {
    let users_find = users.filter((user) => (
        (!userData.age || user.age == userData.age) && // comparo simplemente las edades porque no tiene mayor problema
        (!userData.name || user.name.toLowerCase().includes(userData.name.toLowerCase())) &&  // comparo los nombres pasandolos a lowercase con un include (no tiene que ser igual)
        (!userData.gender || user.gender.toLowerCase() == userData.gender.toLowerCase()) &&  // comparo el genero
        (!userData.company || user.company.toLowerCase() == userData.company.toLowerCase()) && 
        (!userData.isActive || user.isActive == userData.isActive )))

    if (users_find.length == 0) {
        return -1
    }

    return users_find
}