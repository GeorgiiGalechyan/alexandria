import * as React from 'react'
import Layout from '../components/layouts/page/layout'
// import TechCard from '../components/cards/techs/card'

const rowSection = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '60px 0',
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Главная">
      <div style={rowSection}>{/*<TechCard />*/}</div>
    </Layout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <title>Home Page</title>

export default IndexPage
