import { Link } from 'react-router-dom'

import { SiCoinmarketcap } from "react-icons/si";
import { RiHome2Line } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { MdPlaylistAdd } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

import './style.scss'

export default function Menu() {
  return (
    <div className='sidebar'>
      <div className='sidebar_content'>
        <h2><SiCoinmarketcap /> Elfa Market</h2>
        <div className='sidebar__links'>
          {/* <Link to="/"><span><RiHome2Line size={20}/> Painel</span> <span><IoIosArrowForward/></span></Link> */}
          <Link to="/"><span><CiViewList size={20}/>Lista de produtos</span><span><IoIosArrowForward/></span></Link>
          <Link to="/cadastrar_produtos"><span><MdPlaylistAdd size={20}/> Cadastrar Produto</span> <span><IoIosArrowForward/></span></Link>
          
        </div>
      </div>

      {/* <div className='label_menu'>
        <span>Menu</span>
        <LuMenu />
      </div> */}
    </div>
  )
}
