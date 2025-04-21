import { Link } from 'react-router-dom'

import { SiCoinmarketcap } from "react-icons/si";
import { RiHome2Line } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { MdPlaylistAdd } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

import './style.scss'

export default function Menu() {
  return (
    <div className='sidebar'>
      <h2><SiCoinmarketcap size={50}/> Elfa Market</h2>
      <div className='sidebar__links'>
        <Link to="/painel"><span><RiHome2Line size={20}/> Painel</span> <span><IoIosArrowForward/></span></Link>
        <Link to="/cadastrar_produtos"><span><MdPlaylistAdd size={20}/> Cadastrar Produto</span> <span><IoIosArrowForward/></span></Link>
        <Link to="/lista_produtos"><span><CiViewList size={20}/>Lista de produtos</span><span><IoIosArrowForward/></span></Link>
      </div>
    </div>
  )
}
