import * as React from 'react'

import Header from './Header/Header'
import AsideLayout from './AsideLayout/AsideLayout'
import Footer from './Footer/Footer'

import { gridContainer, main, wrapper } from './Layout.module.css'

import headerMenuData from '../../assets/data/menus/headerMainMenu.js'

const Layout = ({ asideMenuData, children }) => {
  return (
    <div className={gridContainer}>
      <Header menuData={headerMenuData} />
      {asideMenuData ? (
        <AsideLayout menuData={asideMenuData}>{children}</AsideLayout>
      ) : (
        <main className={main}>
          <div className={wrapper}>{children}</div>
        </main>
      )}
      <Footer />
    </div>
  )
}

export default Layout
