import * as React from 'react'
import Header from './Header/Header'
import AsideLayout from './AsideLayout/AsideLayout'
import Footer from './Footer/Footer'

import { gridContainer, main, wrapper, title } from './Layout.module.css'

import headerMenuData from '../../assets/data/menus/headerMainMenu.js'

const Layout = ({ asideMenuData, pageTitle, children }) => {
  return (
    <div className={gridContainer}>
      <Header menuData={headerMenuData} />
      {asideMenuData ? (
        <AsideLayout menuData={asideMenuData} pageTitle={pageTitle}>
          {children}
        </AsideLayout>
      ) : (
        <main className={main}>
          <div className={wrapper}>
            <h1 className={title}>{pageTitle}</h1>
            {children}
          </div>
        </main>
      )}
      <Footer />
    </div>
  )
}

export default Layout
