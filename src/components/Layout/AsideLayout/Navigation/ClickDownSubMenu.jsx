import React from 'react'
import { Link } from 'gatsby'

const ClickDownSubMenu = ({ subMenuItem }) => {
  return (
    <menu className="drop-down-sub-menu">
      <button>
        <Link className="gatsby-link" to={subMenuItem.url}>
          {subMenuItem.text}
        </Link>
      </button>
    </menu>
  )
}

export default ClickDownSubMenu
