import userActions from '../../repository/usersRepository'


exports.getActiveUsersByName = (ctx) => {
    const result = userActions.getActiveUsersByName(ctx.params.name) // se utiliza la funcion definida en usersRepository para que lo filtre por nombre y activo
    if (result == -1) { //en caso de que no se encuentre al usuario
        ctx.status = 404
        ctx.body = {status: 404, message: `El usuario ${ctx.params.name} no existe`}
    }else if (!Array.isArray(result)){ // en caso de que ocurra algun error inesperado y no devuelva un arreglo
        ctx.status = 500
        ctx.body = {status: 500, message: `Hubo un error al procesar los datos, intente nuevamente`}
    }else { // si devuelve un arreglo entonces que devuelva el usuario
        ctx.status = 200
        ctx.body = result
    }


    return ctx
}

exports.findUser = (ctx) => {

    const result = userActions.findUser(ctx.request.body) // se utiliza la funcion definida en usersRepository para encontrar al usuario especifico
    if (result == -1) {
        ctx.status = 200
        ctx.body = {status: 200, message: `No se encontró el usuario buscado`}
    }else if (!Array.isArray(result)){
        ctx.status = 500
        ctx.body = {status: 500, message: `Hubo un error al procesar los datos, intente nuevamente`}
    }else {
        ctx.status = 200
        ctx.body = result
    }


    return ctx
}