import { ProductItem } from './ProductItem'
export function ListProducts({ product, categoryFilter }) {
  return (
    <div>
      <div className="grid grid-cols-4 items-center gap-4">
        {product
          .filter((product) => product.category === categoryFilter)
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}
