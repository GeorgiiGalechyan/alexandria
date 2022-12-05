import * as React from 'react'
import Layout from '../components/layouts/basic/layout'

const rowSection = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '60px 20px',
}

const columnSection = {
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px 20px',
}

const NodePage = () => {
  return (
    <Layout pageTitle="NodeJS">
      <div style={rowSection}>
        <h1>Секция</h1>
        <p>Какой-то текст</p>
        <p>Какой-то текст</p>
      </div>
      <div style={columnSection}>
        <h1>Секция</h1>
        <p>Какой-то текст</p>
        <p>Какой-то текст</p>
      </div>
      <div style={columnSection}>
        <h1>Секция</h1>
        <p>Какой-то текст</p>
        <p>Какой-то текст</p>
      </div>
    </Layout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => (
  <>
    <title>NodeJS Page</title>
    <link id="icon" rel="icon" href="favicon.svg" />
  </>
)

export default NodePage
