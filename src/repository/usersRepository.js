import dataset from '../dataset/users_info.json'

exports.getUsersFromDataset = () => {
    return dataset
}

//AQUI EXPORTAMOS LOS USUARIOS DEL REPOSITORIO, NO ALCANZAMOS A TRABAJAR CON LOS
//CORRESPONDIENTES FILTROS

//export.getUsuariosFiltrados = (names) => {
  //  let filter =getUsuariosFiltrados().filter((usuario)) => {
    //    return usuario.name.toLowerCase().includes(name.toLowerCase())

    //}
//}