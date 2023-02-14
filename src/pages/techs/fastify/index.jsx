import * as React from 'react'
import { Link } from 'gatsby'
import MainLayout from '../../../Layouts/MainLayout/Layout'
import Seo from '../../../components/Seo/Seo.js'

import {} from './index.module.css'
import { fastifyAsideMenu } from '../../../assets/data/menus/fastifyAsideMenu.js'

const FastifyIndexPage = () => {
  return (
    <MainLayout pageName="Fastify" asideMenu={fastifyAsideMenu}>
      <p style={{ marginBottom: '1em' }}>Документация Fastify состоит из двух разделов:</p>
      <ul style={{ marginBottom: '1em' }}>
        {fastifyAsideMenu.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <p style={{ marginBottom: '1em' }}>
        <strong>Справочная документация</strong> представляет собой классический раздел с документацией по API. Она
        предназначена для разработчиков и содержит детальную информацуию по реализации API Fastify.
      </p>
      <p style={{ marginBottom: '1em' }}>
        Раздел <strong>Руководства (гайды)</strong> написан более простым языком и предназначен для ознакомления
        новичков с основными концепциями Fastify.
      </p>
      <p>
        Таким образом,полным новичкам в Fastify сначала нужно прочитать раздел Руководства (гайды). Разработчикам,
        имеющим опыт работы с Fastify, следует обратиться непосредственно к справочной документации, чтобы найти более
        подробную информацию по интересующему их вопросу.
      </p>
    </MainLayout>
  )
}

// Метаданные - Gatsby Head API
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <Seo title="Fastify Документация" />

export default FastifyIndexPage
