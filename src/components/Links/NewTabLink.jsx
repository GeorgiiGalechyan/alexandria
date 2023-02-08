import React from 'react'

const NewTabLink = ({text, ...props }) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

export default NewTabLink
