import React, { useState } from 'react'
import { Link } from 'gatsby'
import Dropdown from './Dropdown'

import { menuItem } from './MenuItem.module.css'

const MenuItems = ({ item, ...props }) => {
  const subMenu = item.submenu

  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      className={menuItem}
      onMouseOver={() => setIsOpen(true)}
      onFocus={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      onBlur={() => setIsOpen(false)}
      {...props}
    >
      {Boolean(subMenu.length) ? (
        <>
          <Link to={item.url}>{item.title}</Link>
          {Boolean(isOpen) && <Dropdown subMenu={subMenu} />}
        </>
      ) : (
        <Link to={item.url}>{item.title}</Link>
      )}
    </button>
  )
}

export default MenuItems
