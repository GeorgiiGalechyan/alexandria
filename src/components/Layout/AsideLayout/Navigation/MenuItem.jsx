import React from 'react'
import { Link } from 'gatsby'
import ClickDown from './ClickDown'

import { parentListItem, gatsbyLink } from './MenuItem.module.css'

const MenuItem = ({ menuItem, ...props }) => {
  return (
    <li className={parentListItem} {...props}>
      {menuItem.dropdown ? (
        <>
          <Link className={gatsbyLink} to={menuItem.url}>
            {menuItem.text}
          </Link>
          <ClickDown subMenuItem={menuItem.dropdown} />
        </>
      ) : (
        <Link className={gatsbyLink} to={menuItem.url}>
          {menuItem.text}
        </Link>
      )}
    </li>
  )
}

export default MenuItem
