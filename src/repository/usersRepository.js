let users = require('../dataset/users_info.json')

exports.getUsers = () => {
    return users
}

exports.getFilter = (name) => {
    let array = []
    users.forEach(element => {
        if(element.isActive){
            if (element.name.toLowerCase().includes(name.toLowerCase())){
                array.push(element)
            }
        }
    });

    array.sort(function(user_1, user_2) {
        return user_1.age - user_2.age;
    });

    return array
}

exports.getDetails = (data) => {
    let users_array = [];

    users.forEach(element => {
        let flag = 0;
        for(let atributo in data){
            if(element[atributo] != data[atributo]){
                flag = 1;
        }}

        if(flag == 0){
            users_array.push(element)
        }
    });
    return users_array
}
