import * as React from 'react'
import Layout from '../components/layouts/basic/layout'
import TechCard from '../components/cards/techs/card'

const rowSection = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '60px 20px',
}

const columnSection = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px 20px',
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Главная">
      <div style={rowSection}>
        <TechCard logoSize="32px" />
      </div>
      <div style={columnSection}>
        <h1>Популярные материалы</h1>
      </div>
      <div style={columnSection}>
        <h1>Последние обновления материалов</h1>
      </div>
    </Layout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => (
  <>
    <title>Home Page</title>
    <meta></meta>
  </>
)

export default IndexPage
