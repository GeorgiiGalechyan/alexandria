import React from 'react'
import { svgContainer } from './css/SimpleIcon.module.css'

const SimpleIcon = ({ size = '32px', title, figure, ...props }) => {
  return (
    <div className={svgContainer}>
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <title>{title}</title>
        {figure}
      </svg>
    </div>
  )
}

export default SimpleIcon
