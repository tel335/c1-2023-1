import Router from 'koa-router'
import getHealth from './health/health'
import users from './user/user'

const router = new Router()

router.get('/health', getHealth)



// Endpoint 1 
router.get('/api/users/:name', users.getActiveUsersByName)

// Endpoint 2
router.post('/api/user', users.findUser)

export default router
