import React from 'react'
import { searchContainer, searchInput, searchButton, buttonSVG } from './search.module.css'

const Search = () => {
  return (
    <div className={searchContainer}>
      <input className={searchInput} type="search" />
      <button className={searchButton}>
        <svg className={buttonSVG} role="button" xmlns="http://www.w3.org/2000/svg">
          <path d="" />
        </svg>
      </button>
    </div>
  )
}

export default Search
