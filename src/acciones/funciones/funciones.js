import dataset from '../../dataset/users_info.json'

let user = dataset

exports.getNameAndOrder = (nombre)=>{

    let lista = []
    let buscado = datos.filter((names)=> names.name.includes(nombre))

    const orden = buscado.sort((p1, p2)=> (p1.age >= p2.age) ? 1 : (p1.age < p2.age) ? -1 : 0)

    if(buscado.isActive == true){
        lista.push(orden)
        return lista
    }


}