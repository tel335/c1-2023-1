import dataset from '../dataset/users_info.json'

//Pregunta 1
exports.getUsersbyName = (NametoCheck) => {
    const userList = []

    dataset.forEach( (user) => {  //Itero sobre cada uno de los usuarios presentes en el Json

        const dataName = user.name.toLowerCase()
        const active = user.isActive

        if( dataName.includes(NametoCheck.toLowerCase()) && active){  //Si el nombre ingresado coincide y es activo, se agrega a una lista auxiliar
            userList.push(user)
        }
    })

    userList.sort( (userA, userB) => {  //Se ordena de forma descendente por edad
        return userB.age - userA.age
    })

    return userList
}

//Pregunta 2
exports.getUsersbyData = (AgetoCheck, NametoCheck, GendertoCheck, CompanytoCheck, StatustoCheck) => {

    try {
        const userList = dataset.filter( (user) => { //Se filtran los usuarios en una nueva lista segun los parametros dados

            //En caso de que algunos de los parametros sea indefinido, se concidera como que se cumplio la condicion.
            //Por lo tanto, el filtrado es determinante solamente por los parametros definidos.
            //Si alguno de los parametros pasados no cumple con exactitud, el usuario no se agrega a la nueva lista

            const ageCheck = AgetoCheck ? user.age === AgetoCheck : true
            const nameCheck = NametoCheck ? user.name.toLowerCase() === NametoCheck.toLowerCase() : true 
            const genderCheck = GendertoCheck ? user.gender.toLowerCase() === GendertoCheck.toLowerCase() : true 
            const companyCheck = CompanytoCheck ? user.company.toLowerCase() === CompanytoCheck.toLowerCase() : true 
            const statusCheck = StatustoCheck ? user.isActive === StatustoCheck : true 
    
            return ageCheck && nameCheck && genderCheck && companyCheck && statusCheck
        })
        
        if(userList.length < 1){
            return {"status":200, "message":"No se encontró el usuario buscado"}
        }
    
        return {"status":200, "message":userList}

    } catch (error) {
        console.log(error)
        return {"status":500, "message":"Hubo un error al procesar los datos, intente nuevamente"}
    }

}