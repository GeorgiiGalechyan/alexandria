import React from 'react'
import Navbar from './navigation/Navbar'
import AlexandriaSVG from '../../Logo/AlexandriaSVG'
import ColorModeControl from './colorMode/colorModeControl'
import Search from './search/search'

import { header, wrapper } from './Header.module.css'

const Header = ({ menuData }) => {
  return (
    <header className={header}>
      <div className={wrapper}>
        <AlexandriaSVG />
        <Navbar menuData={menuData} />
        <ColorModeControl />
        <Search />
      </div>
    </header>
  )
}

export default Header
