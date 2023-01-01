import React from 'react'
import { svgContainer, logo } from './techLogo.module.css'

const TechLogo = ({ title, d, ...props }) => {
  return (
    <div className={svgContainer}>
      <svg role="img" className={logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <title>{title}</title>
        <path d={d} />
      </svg>
    </div>
  )
}

export default TechLogo
