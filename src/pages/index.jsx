import * as React from 'react'
import Layout from '../components/Layout/Layout'
import TechCard from '../components/Cards/TechCard/TechCard'
import Seo from '../components/Seo/Seo.js'

import { techCards, columnSection, sectionTitle, popular, latest } from './css/index.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Главная">
      <section className={techCards}>
        <TechCard />
      </section>
      <section className={popular}>
        <h1 className={sectionTitle}>Популярные материалы</h1>
      </section>
      <section className={latest}>
        <h1>Последние обновления</h1>
      </section>
    </Layout>
  )

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Домашняя Страница" />

export default IndexPage
