import * as React from 'react'
import Layout from '../components/layouts/basic/layout'

const rowSection = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '60px 20px',
}

const columnSection = {
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px 20px',
}

const AboutPage = () => {
  return (
    <Layout pageTitle="О проекте">
      <section className={columnSection}></section>
      <section className={rowSection}></section>
      <h1>A L E X A N D R I A</h1>
      <p>
        Переводим на "адекатный" русский язык документацию, связанную с JS, дополняя её комментариями и дополнительными
        примерами кода.
      </p>
      <p>
        Название вдохновлено сериалом <a href="https://www.france.tv/slash/stalk/">Stalk</a>, названо в честь{' '}
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0">
          Александрийской библиотеки
        </a>
      </p>
    </Layout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <title>About Us</title>

export default AboutPage
