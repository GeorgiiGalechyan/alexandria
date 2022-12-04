import React from 'react'
import { Link } from 'gatsby'
import { navMenu, linkList, linkItem, link } from './navMenu.module.css'

const links = [
  { text: 'Главная', url: '/' },
  { text: 'О проекте', url: '/about' },
]

const Navigation = () => {
  return (
    <nav className={navMenu}>
      <ul className={linkList}>
        {links.map((item) => (
          <li key={item.url} className={linkItem}>
            <Link className={link} to={item.url}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
