import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainRoutes from './routes'

const qClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={qClient}>
      <BrowserRouter basename="/GitHub-repositories-explorer/">
        <MainRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
