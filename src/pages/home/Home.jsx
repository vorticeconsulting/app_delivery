import { Link } from 'react-router-dom'

import { FaPhone } from 'react-icons/fa'

import burguer from '../../assets/burguer.png'
import { Service } from '../../components/Services'
import { LinksRedesSocial } from '../../components/LinksRedesSocial'
import { useState, useEffect } from 'react'
import { api } from '../../lib/axios'
import { ListProducts } from './components/ListProducts'
import { BeerBottle, Hamburger, Pizza } from 'phosphor-react'

export function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState('hamburguer')

  async function fetchProducts() {
    const response = await api.get('/products')
    setProducts(response.data)
  }

  function handleCategory(category) {
    setCategories(category)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <main className="flex-1">
      <section className="flex justify-between mt-40">
        {/* section text home */}
        <div className="space-y-12">
          <h1 className="md:text-7xl font-semibold -tracking-wide leading-relaxed max-w-xl text-gray-950">
            Escolha sua comida
            <span className="text-yellow-500 ml-4">favorita.</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-xl">
            Aproveite nosso cardápio! Escolha o que desejar e recebe em sua casa
            de forma rápida e segura.
          </p>

          <div className="flex items-center gap-6">
            <Link
              className="flex items-center justify-center gap-2 bg-yellow-500 text-white w-60 h-16 py-2 rounded-xl shadow-lg text-lg"
              to="/menu"
            >
              Ver Cardápio
            </Link>

            <Link
              className="flex items-center justify-center gap-2 bg-white w-60 h-16  py-2 rounded-xl shadow-lg text-lg hover:bg-yellow-500 transition-colors"
              to="/order"
            >
              <span className="flex items-center gap-2 bg-yellow-500 p-2 rounded-xl justify-center">
                <FaPhone size={24} color="white" />
              </span>
              (32) 99999-9999
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-16">
            <LinksRedesSocial />
          </div>
        </div>

        {/* section image banner */}
        <div className="relative">
          <div className="absolute -z-10 -top-32 -right-6 w-[450px] h-[450px] rounded-[170px] bg-yellow-500"></div>
          <img
            className="z-50 w-[550px]"
            src={burguer}
            alt="Imagem ilustrativa de uma Hamburguer"
          />
          <div className="absolute -bottom-4 -right-6 bg-white rounded-xl shadow-xl p-4 w-[330px]">
            <p className="text-gray-600 text-sm">
              Entrega rápida e funcionários simpáticos. A comida chegou quente e
              muito saborosa!
            </p>
            <span className="text-yellow-500 text-sm font-semibold">
              Thiago Lopes
            </span>
          </div>
        </div>
      </section>

      {/* section services home */}
      <section className="mt-60">
        <h3 className="text-center tracking-wider text-yellow-500 text-2xl font-semibold">
          Serviços
        </h3>
        <h2 className="text-center text-4xl font-bold mt-6">
          Como são nossos serviços?
        </h2>

        <Service />
      </section>

      {/* section cardapio home */}
      <section className="my-60">
        <h3 className="text-center tracking-wider text-yellow-500 text-2xl font-semibold">
          Cardápio
        </h3>
        <h2 className="text-center text-4xl font-bold mt-6">
          Conheça o nosso cardápio
        </h2>

        {/* botões de filtros dos produtos */}
        <div className="flex justify-center gap-4 my-20">
          <button
            className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-lg hover:bg-yellow-500 font-bold text-lg"
            onClick={() => handleCategory('hamburguer')}
          >
            <Hamburger size={24} /> Hamburguer
          </button>
          <button
            className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-lg hover:bg-yellow-500 font-bold text-lg"
            onClick={() => handleCategory('massas')}
          >
            <Pizza size={24} /> Pizza
          </button>
          <button
            className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-lg hover:bg-yellow-500 font-bold text-lg"
            onClick={() => handleCategory('bebida')}
          >
            <BeerBottle size={24} /> Bebidas
          </button>
        </div>

        <ListProducts product={products} categoryFilter={categories} />
      </section>
    </main>
  )
}
