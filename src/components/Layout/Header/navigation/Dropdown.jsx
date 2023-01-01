import React from 'react'
import { Link } from 'gatsby'
import {
  subMenuList,
  subMenuItem,
  gatsbyLink,
  itemIcon,
  itemContent,
  itemLinkText,
  itemLinkDescription,
} from './Dropdown.module.css'

const Dropdown = ({ subMenu, ...props }) => {
  return (
    <menu type="list" className={subMenuList} {...props}>
      {subMenu.map((item) => (
        <li className={subMenuItem} key={item.id}>
          <Link className={gatsbyLink} to={item.url}>
            <div className={itemIcon} style={{ backgroundColor: item.color }}></div>
            <div className={itemContent}>
              <h3 className={itemLinkText}>{item.title}</h3>
              <p className={itemLinkDescription}>{item.info}</p>
            </div>
          </Link>
        </li>
      ))}
    </menu>
  )
}

export default Dropdown
