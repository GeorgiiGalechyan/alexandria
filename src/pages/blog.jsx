import * as React from 'react'
import { graphql } from 'gatsby'
import MainLayout from '../Layouts/MainLayout/Layout'
import Seo from '../components/Seo/Seo.js'

import {} from './css/blog.module.css'

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <MainLayout pageName="Главная">
      <section>
        {posts.map((post) => (
          <article key={post.id} style={{ border: '1px solid var(--viva-magenta)', margin: '1.5em', padding: '1em' }}>
            <h2>{post.frontmatter.title}</h2>
            <p>Опубликовано: {post.frontmatter.date}</p>
          </article>
        ))}
      </section>
    </MainLayout>
  )
}
// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Блог" />

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export default BlogPage
