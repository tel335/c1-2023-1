import repositoryActions from '../../repository/usersRepository'

//Endpoint 1
exports.getAllUsers = (ctx) => {
    ctx.body = repositoryActions.getUsers()
    return ctx
}

//Endpoint 2
exports.filter = (ctx) => {
    let param = ctx.params.name
    const res = repositoryActions.getFilter(param)
    if(res != undefined){
        if(res.length == 0){
            ctx.status = 404;
            ctx.message = "Ningun usuario activo con este nombre";
        }else{
            ctx.status = 200;
            ctx.body = res;
        }
    }else{
        ctx.status=500;
        ctx.message = "Hubo un error al procesar los datos, intente nuevamente"
    }
    return ctx
}


//Endpoint 3
exports.getDetails = (ctx) => {
    const data = ctx.request.body
    let res = repositoryActions.getDetails(data)

    if(res != undefined){
        if(res.length != 0){
            ctx.body = res;
            ctx.status = 200;
        }else{
            ctx.status=200;
            ctx.message = "No se encontró el usuario buscado"
        }
    }else{
        ctx.status=500;
        ctx.message = "Hubo un error al procesar los datos, intente nuevamente"
    }
    return ctx
}