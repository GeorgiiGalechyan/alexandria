import React from 'react'
import MenuItems from './MenuItem'
import { navbar, navListItems } from './Navbar.module.css'

const Navbar = ({ menuData }) => {
  return (
    <nav className={navbar}>
      <ul className={navListItems}>
        {menuData.map((item) => (
          <MenuItems menuItem={item} key={item.id} id={item.id}/>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
