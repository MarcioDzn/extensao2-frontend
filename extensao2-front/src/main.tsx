import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import { queryClient } from './lib/QueryClient.ts'
import App from './App.tsx'
import AppLayout from './layout/AppLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/teste" replace />} />

              <Route
                path="/teste"
                element={<App />}
              />
            </Route>
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
