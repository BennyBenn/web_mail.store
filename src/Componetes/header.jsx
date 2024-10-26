import {Filtros} from './Filtros'

export function Header ({pasarFiltros}){
return(
    <header>
        <h1>tienda</h1>
        <Filtros filtro={pasarFiltros}/>
    </header>
)

}