import React from 'react'
import MenuItems from './MenuItem'

import { menu } from './Navbar.module.css'

const Navbar = ({ menuData }) => {
  return (
    <menu className={menu}>
      {!!menuData.length ? (
        menuData.map((item) => <MenuItems item={item} key={item.id} id={item.id} />)
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
