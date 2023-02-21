import React, { useEffect } from 'react'
import cn from 'classnames'

import Header from './Header/Header'
import TechDocsLayout from '../TechDocsLayout/Layout'
import Footer from './Footer/Footer'

import useTheme from '../../hooks/useTheme'

import { mainLayout, main, wrapper } from './Layout.module.css'

const MainLayout = ({ asideMenu = [], pageName, children }) => {
  const { theme } = useTheme()

  return (
    <div className={cn(mainLayout, theme)}>
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
