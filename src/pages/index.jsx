import * as React from 'react'
import Layout from '../components/Layout/Layout'
import TechCard from '../components/cards/techs/card'
import Seo from '../components/Seo/Seo.js'

import { rowSection, columnSection, sectionTitle, techs, popular, latest } from './css/index.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Главная">
      <section className={[rowSection, techs]}>
        <TechCard />
      </section>
      <section className={[columnSection, popular]}>
        <h1 className={sectionTitle}>Популярные материалы</h1>
      </section>
      <section className={[columnSection, latest]}>
        <h1>Последние обновления</h1>
      </section>
    </Layout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Домашняя Страница" />

export default IndexPage
