import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLink, navLinkItem, navLinkText } from './layout.module.css'

const navLinks = [
  { title: 'Главная', url: '/' },
  { title: 'О проекте', url: '/about' },
]

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <div className="header"></div>
      <nav>
        <ul className={navLink}>
          {navLinks.map((link) => (
            <li className={navLinkItem}>
              <Link className={navLinkText} to={link.url}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <div className="footer"></div>
    </div>
  )
}

export default Layout
