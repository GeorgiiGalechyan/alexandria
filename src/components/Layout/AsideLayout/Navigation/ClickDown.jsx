import React from 'react'
import { Link } from 'gatsby'

import { clickDownMenuList, clickDownMenuItem, gatsbyLink } from './ClickDown.module.css'

const ClickDown = ({ subMenuItem }) => {
  return (
    <>
      <ul className={clickDownMenuList}>
        <li className={clickDownMenuItem}>
          <Link className={gatsbyLink} to={subMenuItem.url}>
            {subMenuItem.text}
          </Link>
        </li>
      </ul>
    </>
  )
}

export default ClickDown
