import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaShoppingBag } from 'react-icons/fa'

const data = [
  {
    id: 1,
    name: 'Reservas',
    path: '/reserva',
  },
  {
    id: 2,
    name: 'Serviços',
    path: '/servico',
  },
  {
    id: 3,
    name: 'Cardápio',
    path: '/cardapio',
  },
  {
    id: 4,
    name: 'Depoimentos',
    path: '/depoimentos',
  },
]

export function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link to="/" className="-ml-6">
        <img className="w-40" src={logo} alt="logo" />
      </Link>

      <nav className="flex items-center justify-between gap-20">
        <ul className="flex items-center gap-10">
          {data.map((item) => (
            <li className="text-lg font-semibold -tracking-wide" key={item.id}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        className="flex items-center justify-center gap-2 bg-white w-60 px-2 py-4 rounded-xl shadow-lg text-lg hover:bg-yellow-500 transition-colors"
        to="/login"
      >
        Meu Carrinho
        <span className="relative bg-yellow-500 p-2 rounded-xl flex items-center justify-center">
          <FaShoppingBag size={24} />
          <strong className="absolute top-0 right-0 w-6 h-6 flex items-center justify-center -mt-2 -mr-2 text-black text-sm font-base bg-rose-100 rounded-full px-2">
            10
          </strong>
        </span>
      </Link>
    </header>
  )
}
