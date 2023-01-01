import React, { useState } from 'react'
import { Link } from 'gatsby'
import Dropdown from './Dropdown'

import { mainMenuItem, gatsbyLink } from './MenuItem.module.css'

const MenuItems = ({ menuItemData, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <li className={mainMenuItem} onMouseOver={open} onFocus={open} onMouseOut={close} onBlur={close} {...props}>
      {menuItemData.submenu ? (
        <>
          <Link className={gatsbyLink} to={menuItemData.url}>
            {menuItemData.title}
          </Link>
          {isOpen && <Dropdown subMenu={menuItemData.submenu} />}
        </>
      ) : (
        <Link className={gatsbyLink} to={menuItemData.url}>
          {menuItemData.title}
        </Link>
      )}
    </li>
  )
}

export default MenuItems
