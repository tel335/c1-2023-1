import dataset from '../dataset/users_info.json'
let usuarios=[]
usuarios= dataset



exports.usuariopornombre= (nombre) => {
    let filtro = usuarios.filter((usuario) =>usuario.name.includes(nombre))
    console.log(nombre)
    console.log(usuario)
    console.log(usuario.name)

    if (filtro.length == 0 ) return 'fallo'

  // Se retornan los productos
    return filtro
}
//Active booleano