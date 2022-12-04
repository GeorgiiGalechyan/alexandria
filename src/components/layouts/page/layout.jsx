import * as React from 'react'
import { container, main, heading } from './layout.module.css'
import PrimaryHeader from '../../headers/primary/header'
import Footer from '../../footer/footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <PrimaryHeader />
      <main className={main}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
