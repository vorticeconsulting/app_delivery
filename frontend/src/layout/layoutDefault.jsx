import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function LayoutDefault() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto w-full px-6 h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
