import React from 'react'
import AsideNavbar from './AsideNavbar/Navbar'

import { main, wrapper, leftAside, content } from './Layout.module.css'

const TechDocsLayout = ({ asideMenu, pageName, children }) => {
  return (
    <main className={main}>
      <div className={wrapper}>
        <aside className={leftAside}>
          <AsideNavbar asideMenu={asideMenu} />
        </aside>
        <div className={content}>
          {pageName && <h1>{pageName}</h1>}
          {children}
        </div>
      </div>
    </main>
  )
}

export default TechDocsLayout
