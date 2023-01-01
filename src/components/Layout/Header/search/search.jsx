import React from 'react'
import { searchContainer, searchInput, searchButton } from './search.module.css'

const Search = () => {
  return (
    <div className={searchContainer}>
      <input className={searchInput} type="search" />
      <button className={searchButton}></button>
    </div>
  )
}

export default Search
