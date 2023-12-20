import styled from 'styled-components';

//Tipo para reutilizar
export type ButtonVariant = 'primary' | 'secondary'  | 'danger' | 'sucess'

//Interface para a propriedade
interface ButtonContainerProsp  {
  variant: ButtonVariant
}

//< ButtonContainerProps > é passado para tipar a propriedade do componente
export const ButtonContainer = styled.button<ButtonContainerProsp>`
  width: 100px;
  height: 100px;

  background-color: ${props => props.theme.primary};

`