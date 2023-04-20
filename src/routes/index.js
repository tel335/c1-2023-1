import Router from 'koa-router'
import getHealth from './health/health'
import users from './users_info.json/user'
const router = new Router()

router.get('/health', getHealth)

// Endpoint 1 
router.get('/api/users/:name', searchUsers)
// Endpoint 2
router.post('/api/user', userisActive)
export default router

