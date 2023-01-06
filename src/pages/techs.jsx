import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'

const TechsPage = () => {
  return (
    <Layout pageName="Технологии">
      <h1>Просто текст</h1>
    </Layout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Технологии" />

export default TechsPage
