import React from 'react'
import { footer, wrapper, main, contacts, contactItem, usefulLinks, links, author } from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <section style={{ width: '100%', display: 'grid', justifyContent: 'center' }}>
        <div className={wrapper}>
          <div className={main}>
            <address className={contacts}>
              <h3>Контакты для связи:</h3>
              <p>
                Телефон: <a href="tel:+79030238585">+7-903-023-85-85</a>
              </p>
              <p>
                E-mail: <a href="mailto:galechyan1991@gmail.com">galechyan1991@gmail.com</a>
              </p>
              <p>
                Telegram: <a href="https://t.me/georgy23/">@georgy23</a>
              </p>
            </address>
            <div className={usefulLinks}>
              <h3>Полезные ссылки</h3>
              <div className={links}>
                <a href="#"> Ссылка 1 </a>
                <a href="#"> Ссылка 2 </a>
                <a href="#"> Ссылка 3 </a>
                <a href="#"> Ссылка 4 </a>
                <a href="#"> Ссылка 5 </a>
                <a href="#"> Ссылка 6 </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ width: '100%', backgroundColor: 'black', display: 'grid', justifyContent: 'center' }}>
        <div className={wrapper}>
          <div className={author}>
            <p>
              Сайт разработан <a href="https://github.com/GeorgiiGalechyan">Georgii Galechyan</a> в 2022-2023 гг.
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
