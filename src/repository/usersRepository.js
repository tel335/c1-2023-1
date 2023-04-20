let users = require('../dataset/users_info.json')

// Endpoint 1 devuelve todos los usuarios (se uso como test)
exports.getUsers = () => {
    return users
}

// Endpoint 2 devuelve los usuarios buscado con $name
exports.getFilter = (name) => {
    let array = []
    //Buscamos en cada usuario si contienen el parametro name
    users.forEach(element => {
        if(element.isActive){
            if (element.name.toLowerCase().includes(name.toLowerCase())){
                array.push(element)
            }
        }
    });

    //Ordenamos el array
    array.sort(function(user_1, user_2) {
        return user_1.age - user_2.age;
    });

    return array
}

// Endpoint 3 devuelve usuarios buscados segun los parametros
exports.getDetails = (data) => {
    let users_array = [];

    //Buscaremos en cada usuario si cumplen los parametros que buscamos
    users.forEach(element => {
        let flag = 0;
        for(let atributo in data){
            //Si no cumnplen con un parametro, su flag sera 1 por lo que no seran considerados
            if(element[atributo] != data[atributo]){
                flag = 1;
        }}

        if(flag == 0){
            users_array.push(element)
        }
    });
    return users_array
}
