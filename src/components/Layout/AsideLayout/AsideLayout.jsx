import React from 'react'
import VerticalNavbar from './Navigation/VerticalNavbar'

import { main, wrapper, leftAside, content } from './AsideLayout.module.css'

const AsideLayout = ({ menuData, children }) => {
  return (
    <main className={main}>
      <div className={wrapper}>
        <aside className={leftAside}>
          <VerticalNavbar menuData={menuData} />
        </aside>
        <section className={content}>{children}</section>
      </div>
    </main>
  )
}

export default AsideLayout
