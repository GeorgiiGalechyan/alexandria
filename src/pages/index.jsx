import * as React from 'react'
import Layout from '../components/layouts/page/layout'

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Главная">
      <p>Какой-то текст</p>
    </Layout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <title>Home Page</title>

export default IndexPage
