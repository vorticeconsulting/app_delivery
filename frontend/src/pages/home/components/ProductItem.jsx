import { Minus, Plus } from 'phosphor-react'
export function ProductItem({ product }) {
  const api = `http://localhost:3333/products/${product.Images[0].key}`

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center gap-3 w-full hover:bg-yellow-500 hover:cursor-pointer">
      <img className="w-full rounded-md" src={api} alt={product.title} />
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="text-xl font-semibold">R$ {product.price}</span>

      <div className="flex items-center gap-2 bg-white shadow-lg p-4 rounded-lg">
        <button className="bg-yellow-500 p-1 rounded-md">
          <Plus size={24} />
        </button>
        <span>2</span>
        <button className="bg-yellow-500 p-1 rounded-md">
          <Minus size={24} />
        </button>
      </div>
    </div>
  )
}
