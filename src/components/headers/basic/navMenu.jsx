import React from 'react'
import { Link } from 'gatsby'
import { navMenu, navLinkList, navLinkItem, navLink } from './navMenu.module.css'

const links = [
  { text: 'Главная', url: '/' },
  { text: 'О проекте', url: '/about' },
]

const Navigation = () => {
  return (
    <nav className={navMenu}>
      <ul className={navLinkList}>
        {links.map((item) => (
          <li key={item.url} className={navLinkItem}>
            <Link className={navLink} to={item.url}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
