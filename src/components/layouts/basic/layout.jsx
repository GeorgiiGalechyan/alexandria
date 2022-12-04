import * as React from 'react'
import { container, main, heading } from './layout.module.css'
import BasicHeader from '../../headers/basic/header'
import Footer from '../../footer/footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <BasicHeader />
      <main className={main}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
