import React from 'react'
import {
  footer,
  wrapper,
  author,
  footerContainerList,
  containerItem,
  contacts,
  itemHeading,
  contactsContent,
  contactItem,
  siteMapContent,
  siteMap,
} from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={wrapper}>
        <section className={footerContainerList}>
          <section className={[containerItem, contacts]}>
            <h3 className={itemHeading}>Контакты для связи:</h3>
            <address className={contactsContent}>
              <p className={contactItem}>
                <strong>Телефон:</strong> <a href="tel:+79030238585">+7-903-023-85-85</a>
              </p>
              <p className={contactItem}>
                <strong>E-mail:</strong> <a href="mailto:galechyan1991@gmail.com"> galechyan1991@gmail.com</a>
              </p>
            </address>
          </section>
          <section className={[containerItem, siteMap]}>
            <h3 className={itemHeading}>Полезные ссылки</h3>
            <div className={siteMapContent}>
              <menu style={{ display: 'grid', gridAutoFlow: 'row' }}>
                <button> Ссылка 1 </button>
                <button> Ссылка 2 </button>
                <button> Ссылка 3 </button>
                <button> Ссылка 4 </button>
                <button> Ссылка 5 </button>
                <button> Ссылка 6 </button>
              </menu>
              <menu style={{ display: 'grid', gridAutoFlow: 'row' }}>
                <button> Ссылка 1 </button>
                <button> Ссылка 2 </button>
                <button> Ссылка 3 </button>
                <button> Ссылка 4 </button>
                <button> Ссылка 5 </button>
                <button> Ссылка 6 </button>
              </menu>
              <menu style={{ display: 'grid', gridAutoFlow: 'row' }}>
                <button> Ссылка 1 </button>
                <button> Ссылка 2 </button>
                <button> Ссылка 3 </button>
                <button> Ссылка 4 </button>
                <button> Ссылка 5 </button>
                <button> Ссылка 6 </button>
              </menu>
            </div>
          </section>
        </section>
        <section className={author}>
          <p>
            Сайт разработан <a href="https://github.com/GeorgiiGalechyan">Georgii Galechyan</a> в 2022 году.
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
