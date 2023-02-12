import React from 'react'
import MenuItems from './MenuItem'
import { mainMenu } from './Navbar.module.css'

const Navbar = ({ menu }) => {
  return (
    <menu className={mainMenu}>
      {menu.length ? (
        menu.map((item) => <MenuItems key={item.id} item={item} />)
      ) : (
        <p>
          В React-компонент <code>Navbar</code> не передан аттрибут <code>menuData</code>, либо <code>menuData</code>
          не является массивом или является пустым массивом!
        </p>
      )}
    </menu>
  )
}

export default Navbar
