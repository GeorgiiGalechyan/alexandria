import React from 'react'

import { container, pageLink } from './breadcrumbs.module.css'

const Breadcrumbs = ({ url, page }) => {
  return (
    <span className={container}>
      <a className={pageLink} href={url}>
        {page}
      </a>
    </span>
  )
}

export default Breadcrumbs
