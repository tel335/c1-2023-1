import dataset from '../dataset/users_info.json'

export default function getUsersFromDataset () {
    return dataset
}
//La siguiente funcion filtra por nombre, y por si estan activos en la compañia, ademas los ordena en orden desc.
export function getUsersNameByAge (name) {
    let users = getUsersFromDataset()
    //Filtra por nombre
    let filtered_names = users.filter((user) => {
        return user.name.split(' ').at(0).toLowerCase() == name.toLowerCase();} )
    if (filtered_names.length == 0) {
        return -1 //no se encontro nombre
    }
    //Filtra nuevamente a la gente que esta activa o no.
    let filter_again_byActive =filtered_names.filter((user)=>{
        return user.isActive == true
    })
    //Y finalmente ordena por edad
    return filter_again_byActive.sort(function(user1, user2){
        return user1.age - user2.age
    }).reverse()
}
