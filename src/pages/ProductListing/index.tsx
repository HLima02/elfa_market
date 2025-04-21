import React from 'react'

import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import { FaRegListAlt } from "react-icons/fa";

export default function ProductListing() {
  return (
    <div>
      <Menu />
       <div className='right_side'>
          <Heading ico={FaRegListAlt} title="Lista de produtos" />
        </div>
    </div>
  )
}
