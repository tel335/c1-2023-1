import Router from 'koa-router'
import getHealth from './health/health'
import user from './user/user'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/users/:name', user.getUsersByName)

export default router
