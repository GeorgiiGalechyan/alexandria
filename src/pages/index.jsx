import * as React from 'react'
import MainLayout from '../Layouts/MainLayout/Layout'
import TechCard from '../components/Cards/TechCard/TechCard'
import Seo from '../components/Seo/Seo.js'
import cardsData from '../assets/data/cards/techCardData.js'

import { section, hero, techs, title, cards } from './index.module.css'

const IndexPage = () => {
  return (
    <MainLayout pageName="Главная">
      <section className={`${section} ${hero}`}>
        <h1 className={title}> Hero </h1>
      </section>
      <section className={`${section} ${techs}`}>
        <h1 className={title}> Наши переводы технологий </h1>
        <div className={cards}>
          <TechCard cards={cardsData} />
        </div>
      </section>
    </MainLayout>
  )
}
// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Домашняя Страница" />

export default IndexPage
