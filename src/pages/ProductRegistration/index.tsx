import React from 'react'

import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import FormProductRegistration from '../../components/FormProductRegistration'
import { MdAppRegistration } from "react-icons/md";

export default function ProductRegistration() {
  return (
    <div >
      <Menu />
      <div className='right_side'>
        <Heading ico={MdAppRegistration} title="Cadastro de produtos" />
        <FormProductRegistration />
      </div>
    </div>
  )
}
