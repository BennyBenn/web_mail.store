import './Footer.css'
import { Filtros } from './Filtros'

export function Footer ({pasarFiltros}) {
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      <Filtros filtro={pasarFiltros}/>
      <h4>E-commerce ⚛️ － <span>@DreamTeam</span></h4>
    </footer>
  )
}
