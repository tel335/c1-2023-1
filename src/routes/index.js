import Router from 'koa-router'
import getHealth from './health/health'
import getUsersFromDataset from '../repository/usersRepository'
import user from './user/user'

const router = new Router()

router.get('/health', getHealth)

router.get( '/api/users/:name', user.ObtenerUsuarioPorNombre)


router.get('/test', getUsersFromDataset)

//en body vienen los parametros
router.post('/api/user', user.ObtenerUsuario)
export default router
