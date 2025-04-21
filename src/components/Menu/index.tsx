import { Link } from 'react-router-dom'

import './style.scss'

export default function Menu() {
  return (
    <div className='sidebar'>
      <h2>Elfa Market</h2>
      <div className='sidebar__links'>
        <Link to="/painel">Painel</Link>
        <Link to="/painel">Cadastrar Produto</Link>
        <Link to="/painel">Lista de produtos</Link>
      </div>
    </div>
  )
}
