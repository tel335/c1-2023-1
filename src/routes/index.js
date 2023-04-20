import Router from 'koa-router'
import getHealth from './health/health'
import getActiveUsers from './users/getActiveUsers'
import getActiveUsersWithDetail from './users/getActiveUsersWithDetail'

const router = new Router()

router.get('/health', getHealth)
router.get('/api/users/:name', getActiveUsers)
router.post('/api/user', getActiveUsersWithDetail)

export default router
