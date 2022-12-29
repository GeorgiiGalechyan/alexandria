import React from 'react'
import { Link } from 'gatsby'
import {
  dropdownMenu,
  menuItem,
  itemLink,
  linkIcon,
  linkContent,
  linkHeading,
  linkDescription,
} from './Dropdown.module.css'

const Dropdown = ({ subMenuItem }) => {
  return (
    <ul className={dropdownMenu}>
      {subMenuItem.map((item) => (
        <li className={menuItem} key={item.id}>
          <Link className={itemLink} to={item.url}>
            <div className={linkIcon} style={{ backgroundColor: item.color }}></div>
            <div className={linkContent}>
              <h3 className={linkHeading}>{item.title}</h3>
              <p className={linkDescription}>{item.info}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown
