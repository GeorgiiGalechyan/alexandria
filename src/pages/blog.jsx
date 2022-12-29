import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'

const BlogPage = () => {
  return <Layout pageTitle="Блог"></Layout>
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Блог" />

export default BlogPage
