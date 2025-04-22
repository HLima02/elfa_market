import { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import ProductList from '../../components/ProductList'
import { FaRegListAlt } from "react-icons/fa";
import BtnRegistration from '../../components/BtnRegistration'
import { ProductContext } from '../../contexts/produtos'
import ProductFilter from '../../components/ProductFilter'

import { Produto } from '../../services/productList'

import './style.scss'

export default function ProductListing() {
  const context = useContext(ProductContext)
  if(!context) { return }
  const {prods, setProds} = context

  const [FilteredITem, setFilterdItem] = useState('')
  const [auxList, setAuxList] = useState<Produto[]>([])

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem('@elfa-market') || '[]')
    setProds(list)
    setAuxList(list)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(FilteredITem.trim() === ''){
        setAuxList(prods)
        return
      }
  
      const filtered = prods.filter((produto:Produto) => 
        produto.nome.toLowerCase().trim().includes(FilteredITem.toLowerCase().trim())
      )
      setAuxList(filtered)
    }, 300)

    return () => clearInterval(timeout)
    
  }, [FilteredITem, prods])

  console.log(auxList)

  return (
    <div>
      <Menu />
       <div className='right_side'>
          <Heading ico={FaRegListAlt} title="Lista de produtos" />
          <ProductFilter filterName={FilteredITem} setFilterName={setFilterdItem} />
          {Object.keys(auxList).length > 0 ? (
            <div>
              <ProductList produtos={auxList} />
              <BtnRegistration path='/cadastrar_produtos' txt='Cadastrar mais produtos' />
            </div>
          ) : (
            <div className='empty_list'>
              <h2 >Lista de produtos vazia</h2>
              <p>Ops! Parace que sua lista de produtos esta vazia. <br/>
              Que tal cadastrar alguns itens? </p>
              <BtnRegistration path='/cadastrar_produtos' txt='Cadastro de produto' />
            </div>
          )}
        </div>
        
    </div>
  )
}
