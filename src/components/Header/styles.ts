import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 4rem auto;
  padding-inline: 4rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 4.8rem;
      height: 4.8rem;
      color: ${(props) => props.theme['gray-07']};

      outline: tra;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.green};
      }
    }
  }
`
