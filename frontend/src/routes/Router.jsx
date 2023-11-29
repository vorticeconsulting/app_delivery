import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { LayoutDefault } from '../layout/layoutDefault'
import { Dashboard } from '../pages/dashboard/dashboard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
