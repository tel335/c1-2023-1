import userActions from '../../actions/user/user'

exports.getUsersByName = (ctx) => {
    ctx.body = userActions.getUsersForCategory(ctx.params.name.toLowerCase())
    return ctx.body
}

