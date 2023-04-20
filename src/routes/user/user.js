import userActions from '../../repository/usersRepository';

exports.getAllUsers = (ctx) => {
    // Por defecto asume ctx.status = 200
    ctx.body = userActions.getUsersFromDataset();
    return ctx
}

exports.getActiveUsers = (ctx) => {
    // Action que busca por categorias, retorna un arreglo de JSONs, en caso de no existir retornara -1
    const result = userActions.getActiveUsers(ctx.params.name)
    if (result == -1){
        ctx.status = 404
        ctx.body = {message: 'El nombre no existe'}
    }else {
        ctx.status = 200
        ctx.body = result
    }
    return ctx
}

exports.searchUser = (ctx) => {
    // Action que busca por categorias, retorna un arreglo de JSONs, en caso de no existir retornara -1
    const result = userActions.searchUser(ctx.request.body)
    if (result == -1){
        ctx.status = 200
        ctx.body = {message: 'El user no existe'}
    }else {
        ctx.status = 200
        ctx.body = result
    }
    return ctx

}
    