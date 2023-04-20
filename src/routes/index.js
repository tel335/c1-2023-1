import Router from 'koa-router'
import getHealth from './health/health'
import repository from './repository/repo'

const router = new Router()

router.get('/health', getHealth)

// Endpoint 1 devuelve todos los usuarios (se uso como test)
router.get('/api/users', repository.getAllUsers)

// Endpoint 2 devuelve los usuarios buscado con $name
router.get('/api/users/:name', repository.filter)

// Endpoint 3 devuelve usuarios buscados segun los parametros
router.post('/api/user', repository.getDetails)

export default router
