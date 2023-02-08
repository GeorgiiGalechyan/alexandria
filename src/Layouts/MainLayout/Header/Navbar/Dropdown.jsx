import React from 'react'
import { Link } from 'gatsby'
import { submenu, submenuItem, gatsbyLink, itemMarker, itemContent } from './Dropdown.module.css'

const Dropdown = ({ subMenu, ...props }) => {
  return (
    <menu type="list" className={submenu} {...props}>
      {subMenu.map((item) => (
        <button className={submenuItem} key={item.id}>
          <Link className={gatsbyLink} to={item.url}>
            <div className={itemMarker} style={{ backgroundColor: item.color }}></div>
            <div className={itemContent}>
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          </Link>
        </button>
      ))}
    </menu>
  )
}

export default Dropdown
