import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { JuegoProvider } from './JuegoContext/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JuegoProvider>
      <App />
    </JuegoProvider>
  </StrictMode>,
)
