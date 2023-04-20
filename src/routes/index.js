import Router from 'koa-router'
import getHealth from './health/health'
import user from './users/user'

const router = new Router()

router.get('/health', getHealth)
router.get('/api/users/:name', user.searchByName)
router.post('/api/user', user.searchByDatos)

export default router
