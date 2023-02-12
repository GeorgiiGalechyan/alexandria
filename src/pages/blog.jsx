import * as React from 'react'
import { graphql } from 'gatsby'
import MainLayout from '../Layouts/MainLayout/Layout'
import Seo from '../components/Seo/Seo.js'

import {} from './css/blog.module.css'

const BlogPage = ({ data }) => {
  return (
    <MainLayout pageName="Главная">
      <section>
        <ul>
          {data.allFile.nodes.map((node) => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
      </section>
    </MainLayout>
  )
}
// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Блог" />

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
