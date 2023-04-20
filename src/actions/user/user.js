import getUsersFromDataset from '../../repository/usersRepository'


exports.searchUser = (name) => {
    let search = getUsersFromDataset().filter((user) => {
        return user.name.toLowerCase().includes(name.toLowerCase());
    });

    search = search.filter((active) => {
        return active.isActive === true
    });
    return search
}

exports.searchByParams = (userData) => {
    console.log("hola")
}