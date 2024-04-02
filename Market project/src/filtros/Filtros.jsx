import React, { useContext, useId, useState } from 'react'
import "./filtros.scss"
import { filterContext } from '../context/filtersContext'


const Filtros = () => {

    const inputRangeID = useId()
    const inputCategoriaId = useId()

   const {handleCategory, handlePrice, value} = useContext(filterContext)

  return (
    <div className='filtros'>
        <label htmlFor={inputRangeID}>Precio</label>
        <input
        onChange={handlePrice}
         type="range"
         id={inputRangeID}
         min={0}
         max={2000}
         />
         <span>${value}</span>

         <label htmlFor={inputCategoriaId}>Categorias</label>
         <select onChange={handleCategory} name="categorias" id={inputRangeID}>
            <option value="all">Todos</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Celulares</option>
         </select>
    </div>
  )
}

export default Filtros