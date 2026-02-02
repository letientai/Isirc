import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from '@components/ui/sonner'
import App from './App.tsx'
import '@styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
        <Toaster
          position="bottom-right"
          className="select-none cursor-pointer"
          closeButton={false}
          visibleToasts={5}
        />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
)
