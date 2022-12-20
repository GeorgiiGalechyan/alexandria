import React from 'react'
import { button, svg } from './svgButton.module.css'

const SVGButton = ({ title, d, btnClassName, svgClassName, figure, ...props }) => {
  return (
    <button className={button + ' ' + btnClassName}>
      <svg
        className={svg + ' ' + svgClassName}
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <title>{title}</title>
        {figure}
      </svg>
    </button>
  )
}

export default SVGButton
