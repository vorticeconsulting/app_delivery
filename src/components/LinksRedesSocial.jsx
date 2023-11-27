import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function LinksRedesSocial() {
  return (
    <>
      <Link className="bg-white hover:bg-yellow-400 shadow-lg w-12 h-12 rounded-xl flex items-center justify-center p-2">
        <InstagramLogo size={24} />
      </Link>
      <Link className="bg-white hover:bg-yellow-400 shadow-lg w-12 h-12 rounded-xl flex items-center justify-center p-2">
        <FacebookLogo size={24} />
      </Link>
      <Link className="bg-white hover:bg-yellow-400 shadow-lg w-12 h-12 rounded-xl flex items-center justify-center p-2">
        <WhatsappLogo size={24} />
      </Link>
    </>
  )
}
