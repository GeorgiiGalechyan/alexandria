import React from 'react'
import { svgContainer } from './css/NodejsSVG.module.css'
import * as svgData from '../../assets/data/svgs/svgData.js'

const NodejsSVG = () => {
  const nodeSvgData = svgData.nodejs
  const path = nodeSvgData.path

  return (
    <div className={svgContainer}>
      <svg
        role="img"
        viewBox={nodeSvgData.viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={nodeSvgData.ariaLabelledby}
      >
        <title>{nodeSvgData.title}</title>
        <path
          {...path.map((key, value) => {
            key: value
          })}
        />
      </svg>
    </div>
  )
}

export default NodejsSVG
