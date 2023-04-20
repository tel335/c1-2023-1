import Router from 'koa-router'
import getHealth from './health/health'
import { getActiveUsers, getUser } from '../actions/index.js'

const router = new Router()

router.get('/health', getHealth)
router.get('/api/users/:name', getActiveUsers)
router.post('/api/user', getUser)
export default router
