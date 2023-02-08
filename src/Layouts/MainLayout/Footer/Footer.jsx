import React from 'react'
import NewTabLink from '../../../components/Links/NewTabLink'
import { externalLinks } from './data'
import {
  footer,
  firstColor,
  secondColor,
  wrapper,
  main,
  contacts,
  item,
  phone,
  email,
  telegram,
  usefulLinks,
  links,
  author,
} from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <section className={firstColor}>
        <div className={wrapper}>
          <div className={main}>
            <address className={contacts}>
              <h3>Контакты для связи:</h3>
              <p className={[item, phone]}>
                Телефон: <a href="tel:+79030238585">+7-903-023-85-85</a>
              </p>
              <p className={[item, email]}>
                E-mail: <a href="mailto:galechyan1991@gmail.com">galechyan1991@gmail.com</a>
              </p>
              <p className={[item, telegram]}>
                Telegram: <a href="https://t.me/georgy23/">@georgy23</a>
              </p>
            </address>
            <div className={usefulLinks}>
              <h3>Полезные ссылки</h3>
              <div className={links}>
                {!!externalLinks.length &&
                  externalLinks.map((link) => <NewTabLink key={link.id} href={link.url} text={link.text} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={secondColor}>
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
