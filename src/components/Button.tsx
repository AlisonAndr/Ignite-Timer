import { ButtonContainer, ButtonVariant } from "./Button.styles"

interface VariantProps {
  //A 'string' deve conter um dos seguintes valores
  variant: ButtonVariant
}

export function Button({variant}: VariantProps) {
  return(
    <ButtonContainer variant={variant}> Enviar </ButtonContainer>
  )
}