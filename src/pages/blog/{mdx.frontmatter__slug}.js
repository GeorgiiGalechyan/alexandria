import * as React from 'react'
import MainLayout from '../../Layouts/MainLayout/Layout'
import Seo from '../../components/Seo/Seo.js'

const BlogPost = () => {
  return (
    <MainLayout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
    </MainLayout>
  )
}

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost
