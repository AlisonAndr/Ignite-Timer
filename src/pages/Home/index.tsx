import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          {/* Input da tarefa */}
          <label htmlFor="task">Vou trabalar em</label>
          <input
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
          />

          {/* Input dos minutos */}
          <label htmlFor="minutesAmount">Durante</label>
          <input type="text" id="minutesAmount" placeholder="- 00 +" />
          <span>minutos</span>
        </FormContainer>

        {/* Minutos na tela */}
        <CountdownContainer>
          <span>2</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>2</span>
          <span>4</span>
        </CountdownContainer>

        <button>
          <Play /> Começar
        </button>
      </form>
    </HomeContainer>
  )
}
