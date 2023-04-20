import Router from 'koa-router'
import getHealth from './health/health'
import fun from './funciones/funciones'

const router = new Router()

router.get('/health', getHealth)


router.get('/api/users/:name', fun.getusers)


export default router

