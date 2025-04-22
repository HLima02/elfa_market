import { useContext } from 'react'

import { ProductContext } from '../../contexts/produtos'

import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import { LuLayoutDashboard } from "react-icons/lu";

import './style.scss'

export default function Dashboard() {
  const context = useContext(ProductContext)
  if(!context) return
  const { prods } = context
  console.log(prods)
  return (
    <div>
      <Menu />
      <div className='right_side'>
        <Heading ico={LuLayoutDashboard} title="Dashboard" />
      </div>
    </div>
  )
}
