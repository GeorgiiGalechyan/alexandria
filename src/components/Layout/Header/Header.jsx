import React from 'react'
import { headerMenuItems } from './navigation/menuItems'
import Navbar from './navigation/Navbar'
import SiteLogo from '../../logo/siteLogo'
import ColorModeControl from './colorMode/colorModeControl'
import Search from './search/search'

import { header, container } from './Header.module.css'

const BasicHeader = () => {
  return (
    <header className={header}>
      <div className={container}>
        <SiteLogo />
        <Navbar menuItems={headerMenuItems} />
        <ColorModeControl />
        <Search />
      </div>
    </header>
  )
}

export default BasicHeader
