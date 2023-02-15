import * as React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import MainLayout from '../../Layouts/MainLayout/Layout'
import Seo from '../../components/Seo/Seo.js'

const BlogPost = ({ data, children }) => {
  const frontmatter = data.mdx.frontmatter
  const heroImage = getImage(frontmatter.hero_image)
  return (
    <MainLayout pageTitle={frontmatter.title}>
      <section style={{ padding: '3em 0' }}>
        <h1>{frontmatter.title}</h1>
        <p>
          <strong>Автор:</strong> {frontmatter.author}
        </p>
        <p>
          <strong>Опубликовано:</strong> {frontmatter.date}
        </p>
        <GatsbyImage style={{ margin: '1em 0' }} image={heroImage} alt={frontmatter.alt} />
        <p>
          Photo Credit: <a href={frontmatter.hero_image_credit_link}>{frontmatter.hero_image_credit_text}</a>
        </p>
      </section>

      {children}
    </MainLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY", locale: "ru")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
