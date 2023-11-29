import { Router } from 'express'
import { uploads } from './middleware/multer.js'
import { CreateProduct } from './controllers/createProduct.js'
import { ListProducts } from './controllers/listProducts.js'

const routes = Router()

const createProduct = new CreateProduct()
const listProduct = new ListProducts()

routes.post('/products', uploads.single('files'), createProduct.handle)
routes.get('/products', listProduct.handle)
// routes.delete()

export { routes }