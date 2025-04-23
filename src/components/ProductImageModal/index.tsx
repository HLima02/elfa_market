import { useContext } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { ProductContext } from '../../contexts/produtos'

import './style.scss'

export default function ProductImageModal() {
  const context = useContext(ProductContext)
  if(!context) return
  const {modalIsOpen, setModalISOpen, modalUrl} = context

  console.log(modalUrl)

  return (
    <div className='modal' style={modalIsOpen ? {display: 'flex'} : {display: 'none'}}>
      <div className='modal__content'>
        <IoMdCloseCircle onClick={() => setModalISOpen(false)} className='close_ico'/>
        <img src={modalUrl} />
      </div>
    </div>
  )
}
