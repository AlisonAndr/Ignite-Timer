import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
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
  }
`

export const Separator = styled.div`
  display: flex;
  align-items: center;

  font-size: 16rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.green};

  overflow: hidden;
`
