import React from 'react'
import { Link } from 'gatsby'
import Dropdown from './Dropdown'

import { menuLinkItem, menuLink } from './MenuItem.module.css'

const MenuItems = ({ items }) => {
  return (
    <li className={menuLinkItem}>
      {items.submenu ? (
        <>
          <Link className={menuLink} to={items.url}>
            {items.title}
          </Link>
          <Dropdown items={items.submenu} />
        </>
      ) : (
        <Link className={menuLink} to={items.url}>
          {items.title}
        </Link>
      )}
    </li>
  )
}

export default MenuItems
