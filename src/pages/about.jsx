import * as React from 'react'
import MainLayout from '../Layouts/MainLayout/Layout'
import Seo from '../components/Seo/Seo.js'

const AboutPage = () => {
  return (
    <MainLayout pageName="О проекте">
      <p>
        Переводим на "адекатный" русский язык документацию, связанную с JS, дополняя её комментариями и дополнительными
        примерами кода.
      </p>
      <p>
        Название вдохновлено сериалом <a href="https://www.france.tv/slash/stalk/">Stalk</a>, названо в честь{' '}
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0">
          Александрийской библиотеки.
        </a>
      </p>
    </MainLayout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="О проекте" />

export default AboutPage
