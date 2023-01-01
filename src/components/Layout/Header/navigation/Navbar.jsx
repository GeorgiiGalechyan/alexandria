import React from 'react'
import MenuItems from './MenuItem'
import { navbar, mainMenu } from './Navbar.module.css'

const Navbar = ({ menuData }) => {
  return (
    <nav className={navbar}>
      <menu type="list" className={mainMenu}>
        {menuData.map((item) => (
          <MenuItems menuItemData={item} key={item.id} id={item.id} />
        ))}
      </menu>
    </nav>
  )
}

export default Navbar
