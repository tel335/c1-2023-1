import userActions from '../../repository/usersRepository'


//Pregunta 1
exports.getUsers = (ctx) => {
    const username = ctx.params.name
    ctx.body = userActions.getUsersbyName(username)
    ctx.status = 200
    return ctx
}

//Pregunta 2

exports.getUsersSpecific= (ctx) => {
    const body = ctx.request.body

    const userAge = body.age
    const userName = body.name
    const usergender = body.gender
    const userCompany = body.company
    const userActive = body.isActive

    const response = userActions.getUsersbyData(userAge, userName, usergender, userCompany, userActive)

    if(response.status === 500){
        ctx.status = 500
    }

    else if(response.message !== "No se encontró el usuario buscado"){
        ctx.body = response.message
        return ctx
    }

    ctx.body = response
    return ctx
}