import Router from 'koa-router'
import getHealth from './health/health.js'
import userActions from './users/users.js'

const router = new Router()

router.get('/health', getHealth)

//Pregunta 1
router.get('/api/users/:name', userActions.getUsers)

//Pregunta 2
router.post('/api/users', userActions.getUsersSpecific)

export default router
