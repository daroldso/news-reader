import React from 'react'
import styles from './SearchField.module.css'
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'

const SearchField = (props) => {
  const { onSearchInputChange } = props

  return (
    <div className={`${styles.container} flex items-center pl-4`}>
      <SearchIcon fill="#fff" />
      <input
        type="text"
        placeholder="Search"
        className={`${styles.input} ${props.className}`}
        onChange={onSearchInputChange}
      />
    </div>
  )
}

export default SearchField
