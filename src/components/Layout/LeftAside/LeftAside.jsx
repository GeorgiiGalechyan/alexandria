import React from 'react'
import { Link } from 'gatsby'
import {
  main,
  wrapper,
  leftAside,
  menuList,
  listItem,
  itemLink,
  linkIcon,
  linkContent,
  linkHeading,
  content,
} from './LeftAside.module.css'

const LeftAside = ({ menu, children }) => {
  return (
    <main className={main}>
      <div className={wrapper}>
        <aside className={leftAside}>
          <ul className={menuList}>
            {menu.map((item) => (
              <li className={listItem} key={item.id}>
                <Link className={itemLink} to={item.link | '#'}>
                  <div className={linkIcon} style={{ backgroundColor: item.color | 'green' }}></div>
                  <div className={linkContent}>
                    <h3 className={linkHeading}>{item.text | 'Отсутствует текст ссылки'}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <section className={content}>{children}</section>
      </div>
    </main>
  )
}

export default LeftAside
