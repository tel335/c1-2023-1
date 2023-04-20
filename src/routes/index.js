import Router from 'koa-router'
import getHealth from './health/health'
import getNameByAge from './users/users'
import getUserDetails from './users/users'
const router = new Router()

router.get('/health', getHealth)

router.get('/api/users/:name', getNameByAge)

router.get('api/users', getUserDetails)
export default router
