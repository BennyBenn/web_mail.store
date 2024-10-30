import { useState,useId } from 'react'
import './filtros.css'
export function Filtros( {filtro}){
    const [minPrice,setMinPrice]=useState(0)

    const precioMinimoid=useId()
    const filtroCategoriaid=useId()
    const cambiarMinPrice = (event) => {
        setMinPrice(event.target.value)
        filtro(estadoPrevio =>({
            ...estadoPrevio,
            minPrice: event.target.value
        }))
    }
    const cambiarCategoria= (event)=>{
        filtro(estadoPrevio =>({
            ...estadoPrevio,
            category: event.target.value
    }))
}
    return(

        <section className="filtros">
            <div>
                <label htmlFor={precioMinimoid}>precio a partir de:</label>
                <input type="range" 
                id={precioMinimoid}
                min='0'
                max='1000'
                onChange={cambiarMinPrice}
                />
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor={filtroCategoriaid}>categoria</label>
                <select  id={filtroCategoriaid} onChange={cambiarCategoria}>
                    <option value="all">todas</option>
                    <option value="CD">CD</option>
                    <option value="Cassette">Cassette</option>

                </select>
            </div>
        </section>
    )
}
