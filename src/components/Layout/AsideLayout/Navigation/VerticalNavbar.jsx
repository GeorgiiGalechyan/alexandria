import React from 'react'
import MenuItem from './MenuItem'

import { verticalNavbar, verticalMenuList } from './VerticalNavbar.module.css'

const VerticalNavbar = ({ menu }) => {
  return (
    <nav className={verticalNavbar}>
      <menu className={verticalMenuList}>
        {menu.map((menuItem) => (
          <MenuItem key={menuItem.id} id={menuItem.id} menuItem={menuItem} />
        ))}
      </menu>
    </nav>
  )
}

export default VerticalNavbar
