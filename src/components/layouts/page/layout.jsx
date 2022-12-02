import * as React from 'react'
import { Link } from 'gatsby'
import { container, header, heading, navLink, navLinkItem, navLinkText, main, footer } from './layout.module.css'

const navLinks = [
  { title: 'Главная', url: '/' },
  { title: 'О проекте', url: '/about' },
]

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <header className={header}>
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
      </header>
      <main className={main}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <p>
          Сайт разработан <a href="https://github.com/GeorgiiGalechyan">Georgii Galechyan</a> в 2022 году.
        </p>
      </footer>
    </div>
  )
}

export default Layout
