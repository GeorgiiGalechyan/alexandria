import * as React from 'react'
import Header from './Header/Header'
import LeftAside from './LeftAside/LeftAside'
import Footer from './Footer/Footer'

import { container, main, wrapper, title } from './Layout.module.css'

const Layout = ({ asideMenu, pageTitle, children }) => {
  return (
    <div className={container}>
      <Header />
      {asideMenu ? (
        <LeftAside menu={asideMenu}>
          <h1 className={title}>{pageTitle}</h1>
          {children}
        </LeftAside>
      ) : (
        <main className={main}>
          <div className={wrapper}></div>
          <h1 className={title}>{pageTitle}</h1>
          {children}
        </main>
      )}
      <Footer />
    </div>
  )
}

export default Layout
