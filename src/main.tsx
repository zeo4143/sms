import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider
    defaultTheme='system'
    storageKey="vite-ui-theme"
  >
    <App />
  </ThemeProvider>,
)