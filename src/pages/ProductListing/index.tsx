import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import ProductList from '../../components/ProductList'
import { FaRegListAlt } from "react-icons/fa";
import BtnRegistration from '../../components/BtnRegistration'
import { ProductContext } from '../../contexts/produtos'

import './style.scss'

export default function ProductListing() {

  const context = useContext(ProductContext)
  if(!context) { return }
  const {prods, setProds} = context

  useEffect(() => {
  function loadList(){
    let list = JSON.parse(localStorage.getItem('@elfa-market') || '[]')
    setProds(list)
    console.log(list)
    console.log(Object.keys(list).length)
  }

  loadList()

  }, [])

  return (
    <div>
      <Menu />
       <div className='right_side'>
          <Heading ico={FaRegListAlt} title="Lista de produtos" />
          {Object.keys(prods).length > 0 ? (
            <div>
              <ProductList produtos={prods} />
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
