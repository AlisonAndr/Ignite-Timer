// Componente do React
import { ThemeProvider } from 'styled-components'

// Tema customizado
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/Global'

// Rotas
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
