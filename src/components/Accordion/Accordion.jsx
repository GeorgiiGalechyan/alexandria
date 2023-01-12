import React from 'react'
import { Link } from 'gatsby'

const AccordionVerticalMenu = (menu) => {
  return (
    <menu className="accordion">
      {menu.map((menuItem) => (
        <>
          <button key={menuItem.id} className="accordion-button">
            <Link className={['gatsby-link', 'accordion-link', 'accordion-menu-item']} to={menuItem.url}>
              {menuItem.text}
            </Link>
          </button>
          <menu className="accordion-sub-menu">
            {menuItem.subMenu.map((subMenuItem) => (
              <>
                <Link
                  key={subMenuItem.id}
                  className={['gatsby-link', 'accordion-link', 'accordion-sub-menu-item']}
                  to={subMenuItem.url}
                >
                  {subMenuItem.text}
                </Link>
              </>
            ))}
          </menu>
        </>
      ))}
    </menu>
  )
}

export default AccordionVerticalMenu
