import React from 'react'
import MenuItems from './MenuItem'
import { navbar, navListItems } from './Navbar.module.css'

const Navbar = ({ menuItems }) => {
  return (
    <nav className={navbar}>
      <ul className={navListItems}>
        {menuItems.map((menu) => (
          <MenuItems items={menu} key={menu.id} />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
