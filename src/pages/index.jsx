import * as React from 'react'
import Layout from '../components/layouts/basic/layout'
import TechCard from '../components/cards/techs/card'


import { rowSection, columnSection, sectionTitle } from './css/index.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Главная">
      <section className={rowSection}>
        <TechCard />
      </section>
      <section className={columnSection}>
        <h1 className={sectionTitle}>Популярные материалы</h1>
      </section>
      <section className={columnSection}>
        <h1>Последние обновления материалов</h1>
      </section>
    </Layout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => (
  <>
    <title>Home Page</title>
    <link id="icon" rel="icon" href="favicon.svg" />
  </>
)

export default IndexPage
