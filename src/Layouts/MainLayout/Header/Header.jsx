import React from 'react'
import { SVGs } from '../../../assets/data/svgs/svgData.js'
import Navbar from './Navbar/Navbar'
import ThemeController from './ThemeController/ThemeController'
import SearchPanel from './SearchPanel/SearchPanel'
import Svg from '../../../components/SvgIcon/Svg'

import { headerMenuData } from './menuData.js'

import { header, wrapper } from './Header.module.css'

const logo = SVGs.alexandria

const Header = () => {
  return (
    <header className={header}>
      <div className={wrapper}>
        <Svg
          size={'40px'}
          title={logo.title}
          label={logo.label}
          viewBox={logo.viewBox}
          d={logo.d}
          fill={logo.fillDark}
        />
        <Navbar menu={headerMenuData} />
        <ThemeController />
        <SearchPanel />
      </div>
    </header>
  )
}

export default Header
