import {prisma} from '../database/prismaClient.js'

export class ListProducts {
  async handle(req, res) {
    try {
      
      const products = await prisma.images.findMany()

      return res.status(200).json(products)

    } catch (error) {
      return res.status(400).json({message: error.message})
    }
  }
}