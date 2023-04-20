import koa from 'koa'
import bodyParser from 'koa-body'
import router from './routes/index'

const app = new koa()
const port = 3000

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

//pregunta 1
app.get('/api/users/:name',GetActiveUsers)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
