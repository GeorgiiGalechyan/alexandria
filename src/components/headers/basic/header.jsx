import React from 'react'
import Navigation from './navMenu'
import SiteLogo from '../../logo/siteLogo'
import ThemeScheme from './themeScheme'
import Search from './search'

import { header, container } from './header.module.css'

const BasicHeader = () => {
  return (
    <header className={header}>
      <div className={container}>
        <SiteLogo />
        <Navigation />
        <ThemeScheme />
        <Search />
      </div>
    </header>
  )
}

export default BasicHeader
