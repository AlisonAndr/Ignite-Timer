import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tarefa 01</td>
              <td>25 Minutos</td>
              <td>Há cerca de 1 semana</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa 01</td>
              <td>25 Minutos</td>
              <td>Há cerca de 1 semana</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
