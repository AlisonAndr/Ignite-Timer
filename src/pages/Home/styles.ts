import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    gap: 5.6rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  color: ${(props) => props.theme['gray-07']};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 160%;
`
const BaseInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-04']};

  color: ${(props) => props.theme['gray-04']};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 100%;
  text-align: center;

  &:focus {
    border-bottom: ${(props) => props.theme.green};
  }

  &::placeholder {
    border-bottom: ${(props) => props.theme['gray-06']};
  }
`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  // Web-kit para tirar a setinha do datalist
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 7.2rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  span {
    font-size: 16rem;
    font-weight: 700;
    font-family: 'Roboto Mono', monospace;

    color: ${(props) => props.theme['gray-07']};
    background: ${(props) => props.theme['gray-08']};
    border-radius: 8px;

    padding: 1.6rem;

    cursor: default;
  }
`

export const Separator = styled.div`
  display: flex;
  align-items: center;

  font-size: 16rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.green};

  overflow: hidden;

  cursor: default;
`

export const ButtonCountDownContainer = styled.button`
  width: 100%;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border-radius: 8px;
  border: none;

  color: ${(props) => props.theme['gray-05']};
  background: ${(props) => props.theme['green-dark']};

  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.9rem;
  text-transform: capitalize;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['gray-07']};
    background: ${(props) => props.theme.green};
  }
`
