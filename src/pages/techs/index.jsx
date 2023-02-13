import React from 'react'
import MainLayout from '../../Layouts/MainLayout/Layout'
import Seo from '../../components/Seo/Seo'

import {} from './index.module.css'

const TechsPage = () => {
  return (
    <MainLayout pageName="Технологии">
      <h1>Технологии</h1>
    </MainLayout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Технологии" />

export default TechsPage
