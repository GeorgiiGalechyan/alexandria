import * as React from 'react'
import { Link, graphql } from 'gatsby'
import MainLayout from '../../Layouts/MainLayout/Layout'
import Seo from '../../components/Seo/Seo.js'

import { postCard } from './index.module.css'

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <MainLayout pageName="Главная">
      <section>
        {posts.map((post) => (
          <article key={post.id} className={postCard}>
            <h2>
              <Link to={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
            </h2>
            <p>Опубликовано: {post.frontmatter.date}</p>
            <div>{post.excerpt}</div>
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
          slug
        }
        id
        excerpt
      }
    }
  }
`

export default BlogPage
