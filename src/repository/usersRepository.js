import users from '../dataset/users_info.json'
import dataset from '../dataset/users_info.json'

function getUsersByName(name){
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name) && user.isActive);
    const sortedUsers = filteredUsers.sort((a, b) => b.age - a.age);
    return sortedUsers;
}

function detailUser (age, name, geneder, company, isActive) {
    const user = users.find(user =>
        user.age === age &&
        user.name === name &&
        user.gender === gender &&
        user.company === company &&
        user.isActive === isActive
        )
    return user || null
}

module.exports = {
    getUsersByName,
    detailUser,
  };