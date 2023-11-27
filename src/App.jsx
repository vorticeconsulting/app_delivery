import { DeliveryProvider } from './context/DeliveryContext'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <div>
      <DeliveryProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DeliveryProvider>
    </div>
  )
}
