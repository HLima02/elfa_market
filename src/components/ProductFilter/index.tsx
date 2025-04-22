import { useState, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import './style.scss'

type FilterProps = {
  filterName: string,
  setFilterName: React.Dispatch<React.SetStateAction<string>>
}


const ProductFilter:React.FC<FilterProps> = ({filterName, setFilterName}) => {
  return (
    <div className='filter'>
      <IoSearch className='search_ico' />
      <input type='text' placeholder='Filtrar por nome' value={filterName} onChange={(e) => setFilterName(e.target.value)} /> 
    </div>
  )
}

export default ProductFilter