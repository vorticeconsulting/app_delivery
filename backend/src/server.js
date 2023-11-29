import express from 'express'
import cors from 'cors'
import { routes } from './routes.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/products', express.static('./uploads'))
app.use(express.json())

app.use(routes)

app.listen(3333, () => {
  console.log('Server started on port 3333!')
})