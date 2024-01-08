import styled from 'styled-components'

// Main Container
export const HistoryContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  h1 {
    font-size: 2.6rem;
    color: ${(props) => props.theme['gray-07']};
    font-weight: 700;
    line-height: 160%;
  }
`
// Table Container
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 3.2rem;

  //Table
  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;

    // Table Head
    th {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 160%;
      text-align: left;

      padding: 1.6rem 2.4rem;

      color: ${(props) => props.theme['gray-07']};
      background: ${(props) => props.theme['gray-03']};

      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }

    // Table Body
    tbody {
      color: ${(props) => props.theme['gray-06']};
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 160%;
      text-align: left;

      background: ${(props) => props.theme['gray-08']};

      td {
        padding: 1.6rem 2.4rem;
      }
    }
  }
`

// Interface Status HightLight
const STATUS_COLORS = {
  yellow: 'yellow',
  red: 'red',
  green: 'green',
} as const
interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}
// Status Highlight
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;

    border-radius: 999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
