import * as React from 'react'

import Header from './Header/Header'
import AsideLayout from './AsideLayout/AsideLayout'
import Footer from './Footer/Footer'

import { gridContainer, main, wrapper } from './Layout.module.css'

import headerMenuData from '../../assets/data/menus/headerMainMenu.js'

<<<<<<< HEAD
const Layout = ({ asideMenuData, children }) => {
  return (
    <div className={gridContainer}>
      <Header menuData={headerMenuData} />
      {asideMenuData ? (
        <AsideLayout menuData={asideMenuData}>{children}</AsideLayout>
=======
const Layout = ({ asideMenuData = [], pageName, children }) => {
  return (
    <div className={gridContainer}>
      <Header menuData={headerMenuData} />
      {!!asideMenuData.length ? (
        <AsideLayout menuData={asideMenuData} pageTitle={pageTitle}>
          {children}
        </AsideLayout>
>>>>>>> 34f3f48373ace557084a7385747790152a8099e6
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
