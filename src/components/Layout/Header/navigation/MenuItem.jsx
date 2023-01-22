import React, { useState } from 'react'
import { Link } from 'gatsby'
import Dropdown from './Dropdown'

import { menuItem } from './MenuItem.module.css'

const MenuItems = ({ item, ...props }) => {
  const dropdownMenu = item.subMenu

  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <button className={menuItem} onMouseOver={open} onFocus={open} onMouseOut={close} onBlur={close} {...props}>
      {dropdownMenu ? (
        <>
          <Link to={item.url}>{item.title}</Link>
          {isOpen && <Dropdown subMenu={item.submenu} />}
        </>
      ) : (
        <Link to={item.url}>{item.title}</Link>
      )}
    </button>
  )
}

export default MenuItems
