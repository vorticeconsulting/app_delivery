import { createContext } from 'react'

export const DeliveryContext = createContext({})

export function DeliveryProvider({ children }) {
  return (
    <DeliveryContext.Provider value={{}}>{children}</DeliveryContext.Provider>
  )
}
