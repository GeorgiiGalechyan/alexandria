import React from 'react'
import VerticalNavbar from './Navigation/VerticalNavbar'

import { main, wrapper, leftAside, pageContent } from './AsideLayout.module.css'

const AsideLayout = ({ verticalMenuForLeftAside, children }) => {
  return (
    <main className={main}>
      <div className={wrapper}>
        <aside className={leftAside}>
          <VerticalNavbar menu={verticalMenuForLeftAside} />
        </aside>
        <section className={pageContent}>{children}</section>
      </div>
    </main>
  )
}

export default AsideLayout
