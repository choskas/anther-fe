import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './context/Auth.tsx'
import Routes from './lib/Router.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </QueryClientProvider>
)
