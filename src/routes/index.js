import Router from 'koa-router'
import getHealth from './health/health'

const usersRepository = require('../repository/usersRepository');
const router = new Router()

router.get('/health', getHealth)

//Endpoint 1
router.get('/api/users/:name', (ctx) => {
    const name  = ctx.params.name;
    const users = usersRepository.getUsersByName(name);
    ctx.body = {users};
  });
module.exports = router;

//Endpoint 2
router.post('/api/user',async(ctx) => {
    const { age, name, gender, company, isActive } = ctx.request.body;
    try {
        const user = await usersRepository.detailUser(age, name, gender, company, isActive);
        if (user) {
          ctx.body = { user };
        } else {
          ctx.status = 200;
          ctx.body = {
            status: 200,
            message: 'No se encontró el usuario buscado',
          };
        }
      } catch (error) {
        ctx.status = 500;
        ctx.body = {
          status: 500,
          message: 'Hubo un error al procesar los datos, intente nuevamente"',
        };
      }
});