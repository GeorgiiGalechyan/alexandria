import React from 'react'
import Navbar from './Navigation/Navbar'
import AlexandriaSVG from '../../Logo/AlexandriaSVG'
import ThemeController from './ThemeController/ThemeController'
import Search from './search/search'

import { header, wrapper } from './Header.module.css'

const Header = ({ menuData }) => {
  return (
    <header className={header}>
      <div className={wrapper}>
        <AlexandriaSVG />
        <Navbar menuData={menuData} />
        <ThemeController />
        <Search />
      </div>
    </header>
  )
}

export default Header
