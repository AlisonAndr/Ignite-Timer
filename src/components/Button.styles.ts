import styled from 'styled-components';

//Tipo para reutilizar
export type ButtonVariant = 'primary' | 'secondary'  | 'danger' | 'sucess'

//Interface para a propriedade
interface ButtonContainerProsp  {
  variant: ButtonVariant
}

//Objeto que contém as chaves
const buttonVariants = {
  primary: 'Blue',
  secondary: 'Purple',
  danger: 'red',
  sucess: 'green'
}

//< ButtonContainerProps > é passado para tipar a propriedade do componente
export const ButtonContainer = styled.button<ButtonContainerProsp>`
  width: 100px;
  height: 100px;

  ${props => { 
    return `background-color:${buttonVariants[props.variant]}`
  }}
`