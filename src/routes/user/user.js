import funcionesUsuario from '../../repository/usersRepository'

exports.ObtenerUsuarioPorNombre =(ctx) =>{
    ctx.body= funcionesUsuario.usuariopornombre
    if (ctx.body=='fallo'){
        ctx.status=400
    }
    else{
         ctx.status=200
    }   
    return ctx  
}

exports.ObtenerUsuario = (ctx) =>{
    
    if (ctx.body=='no esta'){
        ctx.status= 200
        ctx.message="no se encontro el usuario buscado"
    }
    if (ctx.jsonContent==null){
        ctx.status=200
    }
    if(ctx.status==500){
        ctx.message="Hubo un error al procesar los datos, intente nuevamente"
    }
    return ctx
}
