// d.ts, dentro do arquivo haverá apenas código typescript

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Estraindo as informações do 'defaultTheme'
type ThemeType = typeof defaultTheme

// Estrutura para extender tipos não existentes para o styled-component
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
