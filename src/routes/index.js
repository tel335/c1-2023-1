import Router from 'koa-router'
import getHealth from './health/health'
import actions, { getActiveUsers } from '../actions/index.js'

const router = new Router()

router.get('/health', getHealth)
router.get('/api/users/:name', getActiveUsers)
export default router
