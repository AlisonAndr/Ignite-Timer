import { Play } from 'phosphor-react'
import {
  ButtonCountDownContainer,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          {/* Input da tarefa */}
          <label htmlFor="task">Vou trabalar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-sugestions"
          />

          <datalist id="task-sugestions">
            <option value="Ler" />
            <option value="Estudar" />
          </datalist>

          {/* Input dos minutos */}
          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="- 00 +"
            step={5}
            min={10}
            max={60}
          />
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

        <ButtonCountDownContainer disabled>
          <Play size={24} /> Começar
        </ButtonCountDownContainer>
      </form>
    </HomeContainer>
  )
}
