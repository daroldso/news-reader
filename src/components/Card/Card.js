import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  const { imageUrl, headerTitle, headerSubtitle, title, content } = props

  return (
    <div className={styles.container}>
      <div className="flex items-center p-4">
        <div
          className={`${styles.avatar} flex justify-center items-center mr-3`}
        >
          {headerTitle.substr(0, 1)}
        </div>
        <div className="text-container">
          <h3 className={`${styles.headerTitle} text-sm`}>{headerTitle}</h3>
          <p className={`${styles.headerSubtitle} text-xs`}>{headerSubtitle}</p>
        </div>
      </div>
      <img alt="" src={imageUrl} className="w-full" />
      <div className="p-4">
        <h2 className={`${styles.title} mb-2 text-xl`}>{title}</h2>
        <p className={`${styles.content} mb-1 text-sm`}>{content}</p>
      </div>
    </div>
  )
}

export default Card
