import * as React from 'react'
import Layout from '../components/Layout/Layout'
import TechCard from '../components/Cards/TechCard/TechCard'
import Seo from '../components/Seo/Seo.js'

import cardsData from '../assets/data/cards/techCardData.js'

import { techs, cards, sectionTitle, sectionIntro } from './css/index.module.css'

const IndexPage = () => {
  return (
    <Layout pageName="Главная">
      <section className={techs}>
        <h1 className={sectionTitle}> Наши переводы технологий </h1>
        <p className={sectionIntro}></p>
        <div className={cards}>
          <TechCard cards={cardsData} />
        </div>
      </section>
    </Layout>
  )
}
// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Домашняя Страница" />

export default IndexPage
