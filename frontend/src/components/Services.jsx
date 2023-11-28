import delivery from '../assets/icone-delivery.svg'
import pedido from '../assets/icone-pedido.svg'
import qualidade from '../assets/icone-qualidade.svg'

const data = [
  {
    image: pedido,
    title: 'Fácil de pedir',
    description: 'Você só precisa de alguns passos para pedir sua comida',
  },
  {
    image: delivery,
    title: 'Entrega rápida',
    description: 'Nossa entrega é sempre pontual, rápida e segura.',
  },
  {
    image: qualidade,
    title: 'Melhor qualidade',
    description:
      'Não só a rapidez na entrega, a qualidade também é o nosso forte.',
  },
]

export function Service() {
  return (
    <div className="flex items-center justify-center">
      {data.map((item) => {
        return (
          <div
            key={item.title}
            className="flex flex-col items-center space-y-6 mt-20"
          >
            <img className="w-60 h-60" src={item.image} alt={item.title} />
            <h1 className="flex-1 text-center text-xl font-bold">
              {item.title}
            </h1>
            <p className="text-center text-gray-600 max-w-xs">
              {item.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}
