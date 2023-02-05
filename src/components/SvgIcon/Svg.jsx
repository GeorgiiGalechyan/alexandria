import React from 'react'

import {} from './css/Svg.module.css'

const Svg = ({ size = '32', title, label, viewBox, d, fill }) => {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: size, width: size }}>
      <svg
        style={{ fill: fill }}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        aria-labelledby={label}
      >
        <title>{title}</title>
        <path d={d} fill={fill} />
      </svg>
    </div>
  )
}

export default Svg
