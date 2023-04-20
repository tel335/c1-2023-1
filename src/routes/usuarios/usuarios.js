import productActions from '../../repository/usersRepository'

//AQUI LE DECIMOS QUE CON ESTA FUNCION OBTENGA LOS USUARIOS DEL REPOSITORY
exports.getUsersFromDataset = (ctx) => {
    ctx.body = productActions.getUsersFromDataset()
    return ctx
}

//exports.getUsuariosFiltrados = (ctx) => {
  //  const result = productActions.getUsuariosFiltrados(ctx.params.name)
    //if (result == -1){
      //  ctx.status = 404
        //ctx.body = (message: 'no existe este nombre')
    //}
    //else {
      //  ctx.status = 200
       // ctx.body result
    //}
  //  return ctx
//}

//#AQUI INTENTAMOS DIRECCIONAR Y MOSTRAR POR PANTALLA LOS VALORES CORRESPONDIENTE A CADA CASO, SI ES 200 ES EL RESULTADO CORRECTO Y SI
//ES 404 ES QUE NO EXISTIO