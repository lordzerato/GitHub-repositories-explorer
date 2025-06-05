import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts'
import TheHome from '../pages/TheHome'

const MainRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<TheHome />} />
    </Route>
  </Routes>
)

export default MainRoutes
