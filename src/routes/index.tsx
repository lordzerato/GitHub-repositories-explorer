import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts'
import SearchUser from '@/pages/SearchUser'
import SearchRepo from '@/pages/SearchRepo'
import TrendingRepo from '@/pages/TrendingRepo'

const MainRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<SearchUser />} />
      <Route path="/repos" element={<SearchRepo />} />
      <Route path="/trends" element={<TrendingRepo />} />
    </Route>
  </Routes>
)

export default MainRoutes
