import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

type BtnText = {
  txt: string,
  path: string
}

export default function BtnRegistration({txt, path}:BtnText) {
  return (
   <div className='btn_register_area'>
      <Link to={path} className='btn_register'>{txt}</Link>
   </div>
  )
}
