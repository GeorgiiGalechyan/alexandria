import * as React from 'react'

import Header from './Header/Header'
import TechDocsLayout from '../TechDocsLayout/Layout'
import Footer from './Footer/Footer'

import { gridContainer, main, wrapper } from './Layout.module.css'

const MainLayout = ({ asideMenu = [], pageName, children }) => {
  return (
    <div className={gridContainer}>
      <Header />
      {asideMenu.length ? (
        <TechDocsLayout asideMenu={asideMenu} pageName={pageName}>
          {children}
        </TechDocsLayout>
      ) : (
        <main className={main}>
          <div className={wrapper}>{children}</div>
        </main>
      )}
      <Footer />
    </div>
  )
}

export default MainLayout
