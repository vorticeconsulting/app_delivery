import {prisma} from '../database/prismaClient.js'

export class CreateProduct {
  async handle(req, res) {
    try {

      console.log(req.file)
      console.log(req.body)
      
      const {title, price} = req.body
      const {originalname: name, filename: key, size, path} = req.file

      const product = await prisma.products.create({
        data: {
          title,
          price : Number(price),
          Images: {
            create: {
              key ,
              name,
              path,
              size,
            }
          }
        }
      })
      

      return res.status(200).json(product)
    } catch (error) {
      console.log(error)
    }
  }
}