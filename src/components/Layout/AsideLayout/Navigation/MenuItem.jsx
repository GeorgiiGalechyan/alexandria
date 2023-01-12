import React from 'react'
import { Link } from 'gatsby'
import ClickDownSubMenu from './ClickDownSubMenu'

const MenuItem = ({ menuItem, ...props }) => {
  return (
    <>
      {menuItem.subMenu ? (
        <button className="accordion-button">
          <Link className="gatsby-link" to={menuItem.url}>
            {menuItem.text}
          </Link>
          <ClickDown subMenu={menuItem.subMenu} />
        </button>
      ) : (
        <button>
          <Link className="gatsby-link" to={menuItem.url}>
            {menuItem.text}
          </Link>
        </button>
      )}
    </>
  )
}

export default MenuItem
