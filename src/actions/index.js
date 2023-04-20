import getUsersFromDataset from '../repository/usersRepository.js'
import { errorm } from '../mensajes/index.js'

function Comparador(a, b){ //Funcion que me permitira usar el metodo sort en el arreglo de usuarios activos
    if (a.age < b.age){ //Lo dispongo de esta forma para que ordene de mayor a menor
        return 1
    }
    if (b.age < a.age){
        return -1
    }
    else {return 0}
}

export function getActiveUsers(ctx){ //Funcion que realiza la operacion de pregunta 1
    const data = getUsersFromDataset() //Consulto la BD
    let filter = ctx.params.name.toLowerCase() //Obtengo el nombre a buscar
    if (filter == null || filter == undefined){ //Si el filtro no es valido devuelvo un error 500
        ctx.body = errorm
        return ctx
    }
    let coincidences = [] //Arreglo para los usuarios que interesan
    data.forEach(user => {
        if(user.name.toLowerCase().includes(filter) && user.isActive){ //Agrego los usuarios que contengan el nombre deseado y ademas esten activos
            coincidences.push(user)
        }
    })
    coincidences.sort(Comparador) //Ordeno de mayor a menor
    ctx.body = JSON.stringify(coincidences)
    return ctx
}


