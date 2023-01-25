import React from 'react'
import Navbar from './Navigation/Navbar'
import Svg from '../../SvgIcon/Svg'
import { SVGs } from '../../../assets/data/svgs/svgData.js'
import ThemeController from './ThemeController/ThemeController'
import Search from './search/search'

import { header, wrapper } from './Header.module.css'

import { isDarkTheme } from '../../../utils/theme/theme.js'

const logo = SVGs.alexandria

const Header = ({ menuData }) => {
  return (
    <header className={header}>
      <div className={wrapper}>
        <Svg size="40px" title={logo.title} label={logo.label} viewBox={logo.viewBox} d={logo.d} fill={logo.fillDark} />
        <Navbar menuData={menuData} />
        <ThemeController />
        <Search />
      </div>
    </header>
  )
}

export default Header
