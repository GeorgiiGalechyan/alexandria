import React from 'react'
import MenuItem from './MenuItem'

import { navbar, parentNavList } from './VerticalNavbar.module.css'

const AsideNavbar = ({ menuData }) => {
  return (
    <nav className={navbar}>
      <ul className={parentNavList}>
        {menuData.map((item) => (
          <MenuItem key={item.id} id={item.id} menuItem={item} />
        ))}
      </ul>
    </nav>
  )
}

export default AsideNavbar
