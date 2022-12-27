import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo.js'
import nodeAsideMenu from '../docs/nodejs/asideMenu.js'

const NodePage = () => {
  return <Layout pageTitle="NodeJS" asideMenu={nodeAsideMenu}></Layout>
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="NodeJS Документация" />

export default NodePage
