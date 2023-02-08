import React from 'react'

import testSvgData from './testSvgData'

let icons = testSvgData

const TestComponent = () => {
  return (
    <div>
      {icons[0]} {icons[1]} {icons[2]} {icons[3]}
    </div>
  )
}

export default TestComponent
