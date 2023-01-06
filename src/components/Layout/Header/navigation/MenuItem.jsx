import React, { useState } from 'react'
import { Link } from 'gatsby'
import Dropdown from './Dropdown'

import { mainMenuItem } from './MenuItem.module.css'

const MenuItems = ({ menuItemData, ...props }) => {
  const dropdownMenu = menuItemData.subMenu

  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <button className={mainMenuItem} onMouseOver={open} onFocus={open} onMouseOut={close} onBlur={close} {...props}>
      {dropdownMenu ? (
        <>
          <Link to={menuItemData.url}>{menuItemData.title}</Link>
          {isOpen && <Dropdown subMenu={menuItemData.submenu} />}
        </>
      ) : (
        <Link to={menuItemData.url}>{menuItemData.title}</Link>
      )}
    </button>
  )
}

export default MenuItems
