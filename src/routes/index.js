import Router from 'koa-router'
import getHealth from './health/health'
import usuarios from './usuarios/usuarios'

//AQUI HACEMOS QUE USUARIOS VAYA A LA RUTA Y CARPETA USUARIOS EN DONDE TENEMOS EL JS CON SU CORRESPONDIENTE DIRECCION
const router = new Router()

router.get('/health', getHealth)
router.get('/api/usuarios', usuarios.getUsersFromDataset)
//router.get('/api/products/:name', usuarios.getUsuariosFiltrados)
//AQUI INTENTAMOS CREAR LA API NAME PARA FILTRAR, QUE NO LOGRAMOS CORRERLA, SIN EMBARGO
//TENEMOS LA API USUARIOS QUE NOS MUESTRA A TODOS LOS USUARIOS DE FORMA CORRECTA
export default router
