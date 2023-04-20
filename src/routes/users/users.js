import getUsersFromDataset from "../../repository/usersRepository";
import { getUsersNameByAge } from "../../repository/usersRepository";

//testing: obteniendo todos los nombres
export default function getNameByAge(ctx) {
    ctx.body = getUsersNameByAge(ctx.params.name)
    if (ctx.body == -1){
        ctx.status = 404
        ctx.body = { message: 'not found'}
        return ctx
    }
    return ctx
}

export function getUserDetails(ctx){
    //Se revisa primero si en el body se encuentra los datos necesarios para realizar la busqueda.
    if (ctx.body.age == undefined || ctx.body.name == undefined || ctx.body.gender == undefined || ctx.body.company == undefined || ctx.body.isActive == undefined){
        ctx.status = 500
        ctx.body = {'message' : "Hubo un error al procesar los datos, intente nuevamente."}
        return ctx
    }
    
    return ctx
}