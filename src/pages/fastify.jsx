import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo.js'

import { fastifyAsideMenu } from '../assets/data/menus/fastifyAsideMenu.js'

const FastifyPage = () => {
  return <Layout pageName="Fastify" asideMenu={fastifyAsideMenu}></Layout>
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Fastify Документация" />

export default FastifyPage
