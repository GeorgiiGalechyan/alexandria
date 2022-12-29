import React from 'react'
import Navbar from './navigation/Navbar'
import SiteLogo from '../../logo/siteLogo'
import ColorModeControl from './colorMode/colorModeControl'
import Search from './search/search'

import { header, wrapper } from './Header.module.css'

const BasicHeader = ({ menuData }) => {
  return (
    <header className={header}>
      <div className={wrapper}>
        <SiteLogo />
        <Navbar menuData={menuData} />
        <ColorModeControl />
        <Search />
      </div>
    </header>
  )
}

export default BasicHeader
