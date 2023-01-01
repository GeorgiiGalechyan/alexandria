import React from 'react'
import { footer, siteMakerInfo, contacts, contactItem, phone, eMail } from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <address className={siteMakerInfo}>
        Сайт разработан <a href="https://github.com/GeorgiiGalechyan">Georgii Galechyan</a> в 2022 году.
      </address>
      <address className={contacts}>
        <h3 className="contactHeading">Контакты для связи:</h3>
        <p className={[contactItem, phone]}>
          <strong>Телефон:</strong> <a href="tel:+79030238585">+7-903-023-85-85</a>
        </p>
        <p className={[contactItem, eMail]}>
          <strong>E-mail:</strong> <a href="mailto:galechyan1991@gmail.com"> galechyan1991@gmail.com</a>
        </p>
      </address>
    </footer>
  )
}

export default Footer
