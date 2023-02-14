import * as React from 'react'
import { Link, graphql } from 'gatsby'
import MainLayout from '../../Layouts/MainLayout/Layout'
import Seo from '../../components/Seo/Seo.js'

const BlogPost = ({ data, children }) => {
  return (
    <MainLayout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </MainLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
