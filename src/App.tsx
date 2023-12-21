//Componente do React
import { ThemeProvider } from "styled-components";

//Tema customizado
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/Global";

import { Button } from "./components/Button";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="sucess" />
      
      <GlobalStyles/>
    </ThemeProvider>


  )
}