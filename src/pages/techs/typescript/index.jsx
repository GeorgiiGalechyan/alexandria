import * as React from 'react'
import MainLayout from '../../../Layouts/MainLayout/Layout'
import Seo from '../../../components/Seo/Seo.js'

import {} from './index.module.css'
// import { nodeAsideMenu } from '../../../assets/data/menus/nodeAsideMenu.js'

const TypeScriptIndexPage = () => {
  return (
    <MainLayout MainLayout pageName="NodeJS" asideMenu={undefined}>
      <h1>TypeScript</h1>
    </MainLayout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="TypeScript Документация" />

export default TypeScriptIndexPage
