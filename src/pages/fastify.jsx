import * as React from 'react'
import Layout from '../components/Layout/Layout'
import nodeAsideMenu from '../docs/nodejs/asideMenu.js'
import Seo from '../components/Seo/Seo.js'

const FastifyPage = () => {
  return <Layout pageTitle="Fastify" asideMenu={nodeAsideMenu}></Layout>
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Fastify Документация" />

export default FastifyPage
