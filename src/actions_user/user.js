import dataset from '../dataset/users_info.json'
import getUsersFromDataset from '../repository/usersRepository'
const data = dataset.getUsersFromDataset


exports.GetActiveUsers = (input,response) =>{
    let activos = []
    input = input.toLowerCase()

    getUsersFromDataset().forEach(data =>{
        if((data['name'].toLowerCase()).includes(input)||(data['isActive'].toLowerCase()).includes(input)){ //comparo los datos solicitados con los de la base de datos para extraer losd e mismo nombre y que esten activos
            activos.push(data) //si coinciden ambas lo agrego al arreglo
        }
    })
    return activos
    
}










