import * as React from 'react'
import MainLayout from '../Layouts/MainLayout/Layout'
import Seo from '../components/Seo/Seo.js'

import {} from './css/blog.module.css'

const BlogPage = () => {
  return (
    <MainLayout pageName="Главная">
      <div></div>
    </MainLayout>
  )
}
// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Блог" />

export default BlogPage
