import React from 'react'

import Menu from '../../components/Menu'
import Heading from '../../components/Heading'
import { LuLayoutDashboard } from "react-icons/lu";

import './style.scss'

export default function Dashboard() {
  return (
    <div>
      <Menu />
      <div className='right_side'>
        <Heading ico={LuLayoutDashboard} title="Dashboard" />
      </div>
    </div>
  )
}
