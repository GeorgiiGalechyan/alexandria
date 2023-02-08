import React from 'react'
import { searchInput, searchButton } from './SearchPanel.module.css'

const SearchPanel = () => {
  return (
    <div>
      <input className={searchInput} type="search" />
      <button className={searchButton}></button>
    </div>
  )
}

export default SearchPanel
