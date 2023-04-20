import usersJSON from '../../dataset/users_info.json'
let users = usersJSON

exports.getUsers = () => {
    return users
}

exports.getUsersForCategory = (nombre) => {
    // Se revisa si algun producto tiene la categoria
    let users_filter = users.filter((user) => user.name.toLowerCase().includes(nombre))

    if (users_filter.length == 0 ) return -1
    // ordena los usuarios registrados con el mismo nombre de mayor a menor
    users_filter.sort((a,b) => a.age + b.age)
    // Se retornan los usuarios
    return users_filter
}
