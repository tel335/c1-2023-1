const usersData = require('./dataset/users_info.json')
const {error_message, not_found_message, input_error} = require('./responseMessages.js')

//Función pregunta 1
exports.searchUsers = (input, response) => {            
    if (input === undefined) {      //En caso de que el JSON escrito para realizar el post presente un error
        response.status(500).json(input_error)
    } 
    else{
    let usersArray = []
    input=input.toLowerCase()      
    this.getUsersData().forEach(data => {   //Se utiliza la función ya que retorna el arreglo de todas los usuarios de users_info
        if((data['usersName'].toLowerCase()).includes(input) || (data['usersCompany'].toLowerCase()).includes(input) || (data['usersAge'].toLowerCase()).includes(input) || (data['usersGender'].toLowerCase()).includes(input)){
            usersArray.push(data)   //Se agregan los datos pedidos de este usuario al arreglo
        }
    })
    if (usersArray.length<1){   //Cuando ningún usuario coincidió con el criterio de búsqueda
        response.status(200).json(not_found_message) 
    }
    else{   //Cuando si existe al menos un usuario que coincide con el criterio de búsqueda
        response.status(200).json(usersArray)   
    }
    }
}

//Función pregunta 2
exports.userisActive = (isActive, order, response) => {    
    order=order.toLowerCase()   
    isActive=isActive.toLowerCase()
    if(order === 'asc'){   
        let fullUserData=[]                  //Arreglo para guardar los datos de las compañías que cumplen con los parámetros
        usersData.users.forEach(element => {
            if(isActive === true){  
                fullUserData.push({  //Se agregan solo los usuarios activos
                    "isActive":element.user.isActive,
                    "Age":element.user.Age})
            }
            fullUserData.sort((a, b) => (a.Age > b.Age) ? 1 : -1)
        });
    }
    else{
        response.status(500).json(error_message)    //Error de procesamiento de datos
    }
}

