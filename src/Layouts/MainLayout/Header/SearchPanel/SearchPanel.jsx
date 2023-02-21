import React from 'react'
import { searchPanel, searchInput } from './SearchPanel.module.css'

const SearchPanel = () => {
  return (
    <div className={searchPanel}>
      <input className={searchInput} type="search" />
    </div>
  )
}

export default SearchPanel
