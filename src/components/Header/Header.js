import React from 'react'
import styles from './Header.module.css'
import SearchField from '../SearchField/SearchField'

const Header = (props) => {
  const { onSearchInputChange } = props

  return (
    <header className={`${styles.header} fixed z-10`}>
      <div className="container mx-auto flex items-center px-6 py-3">
        <h1 className="text-xl mr-auto">US News</h1>
        <SearchField
          className="py-2 px-3"
          onSearchInputChange={onSearchInputChange}
        />
      </div>
    </header>
  )
}

export default Header
