import React from 'react'
import MenuItem from './MenuItem'

import { navbar, menu } from './Navbar.module.css'

const AsideNavbar = ({ asideMenu }) => {
  return (
    <nav className={navbar}>
      <menu className={menu}>
        {asideMenu.map((menuItem) => (
          <MenuItem key={menuItem.id} id={menuItem.id} menuItem={menuItem} />
        ))}
      </menu>
    </nav>
  )
}

export default AsideNavbar
