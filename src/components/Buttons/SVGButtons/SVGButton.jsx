import React from 'react'
import { svgButton } from './SVGButton.module.css'

const SVGButton = ({ onClick, title, figure, ...props }) => {
  return (
    <button className={svgButton} onClick={onClick}>
      <svg role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <title>{title}</title>
        {figure}
      </svg>
    </button>
  )
}

export default SVGButton
