import  userActions from '../../actions/user/user'

exports.searchByName = (ctx) => {

    let search = userActions.searchUser(ctx.params.name)
    if (search.length === 0){
        ctx.throw(404, 'Not Found: The user was not found')
    }
    ctx.body = search.sort((a, b) =>  b.age - a.age)
    ctx.status = 200
    return ctx
}
exports.searchByDatos = (ctx) => {
    userActions.searchByParams()
}