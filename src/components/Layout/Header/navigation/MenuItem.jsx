import React from 'react'
import { Link } from 'gatsby'
import Dropdown from './Dropdown'

import { menuLinkItem, menuLink } from './MenuItem.module.css'

const MenuItems = ({ menuItem, ...props }) => {
  return (
    <li className={menuLinkItem} {...props}>
      {menuItem.submenu ? (
        <>
          <Link className={menuLink} to={menuItem.url}>
            {menuItem.title}
          </Link>
          <Dropdown subMenuItem={menuItem.submenu} />
        </>
      ) : (
        <Link className={menuLink} to={menuItem.url}>
          {menuItem.title}
        </Link>
      )}
    </li>
  )
}

export default MenuItems
