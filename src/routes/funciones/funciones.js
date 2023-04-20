import action from '../../acciones/funciones/funciones'


exports.getusers = (ctx) =>{
    const vari = action.getNameAndOrder(ctx.params.name)
    ctx.status = 200
    ctx.body = vari

    return ctx
}