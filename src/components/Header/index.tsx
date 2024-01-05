import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/ignite-logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Imagem no formato de triângulo na cor verde" />
      <nav>
        <Link to="/" title="Timer">
          <Timer size={26} />
        </Link>
        <Link to="/history" title="Histórico">
          <Scroll size={26} />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
