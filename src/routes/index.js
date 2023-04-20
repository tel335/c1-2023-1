import Router from 'koa-router'
import getHealth from './health/health'
import users from './user/user'

const router = new Router()

router.get('/health', getHealth)


// Endpoint to get all users
router.get('/api/users', users.getAllUsers)

// Enpoint 1
// get usuarios activos ordenados por nombre
router.get('/api/users:name', users.getActiveUsers)

// Enpoint 2
// Buscar usuario por parametros 
// mail, name,age, company, isActive
router.post('/api/user', users.searchUser)







export default router

