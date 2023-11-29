import { useState } from 'react'
import { api } from '../../lib/axios'

export function Dashboard() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImage(file)

    if (file) {
      const reader = new FileReader()

      reader.readAsDataURL(file)
    }
  }

  async function createProduct(event) {
    event.preventDefault()

    const data = new FormData()
    data.append('files', image)
    data.append('title', title)
    data.append('price', price)
    data.append('category', category)

    const response = await api.post('/products', data)
    console.log(response.data)
    console.log(image)
    setImage(null)
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <form onSubmit={createProduct} className="flex flex-col gap-2">
          <input
            className="p-2 border border-gray-900"
            type="text"
            placeholder="Nome do produto"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
          />
          <input
            className="p-2 border border-gray-900"
            type="number"
            placeholder="Preço"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="price"
          />
          <input
            className="p-2 border border-gray-900"
            type="text"
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
          />
          <input onChange={handleChangeImage} type="file" name="files" />

          <button className="bg-yellow-500 w-36 p-4 rounded-lg" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
