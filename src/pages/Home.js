import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import dayjs from 'dayjs'

import { fetchArticles } from '../redux/actions'
import { debounce, isScrolledToBottom } from '../services/utils'

import { Card } from '../components'
import preloadIcon from '../assets/images/preloader.gif'

const domains = ['washingtonpost.com', 'nytimes.com']
const pageSize = 10
const totalArticlesLimit = 100
const offset = 700

const Home = (props) => {
  const [page, setPage] = useState(1)
  const { searchKeyword, articles, isFetching, dispatch } = props

  useEffect(() => {
    fetchNewPosts()
  }, [])

  useEffect(() => {
    const handleScrollDebounced = debounce(handleScroll, 100)
    document.addEventListener('scroll', handleScrollDebounced)

    return () => {
      document.removeEventListener('scroll', handleScrollDebounced)
    }
  }, [articles.length, isFetching])

  const handleScroll = () => {
    if (isScrolledToBottom(offset)) {
      fetchNewPosts()
    }
  }

  const fetchNewPosts = async () => {
    if (isFetching || articles.length >= totalArticlesLimit) {
      return
    }

    try {
      dispatch(fetchArticles({ domains, page, pageSize }))
      setPage(page + 1)
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  return (
    <div className="container mx-auto relative pb-12">
      <div className="articles flex flex-wrap -mx-2">
        {articles
          .filter((article) => {
            const searchKeywordLowercase = searchKeyword.toLowerCase()
            const { title = '', content = '' } = article
            return (
              String(title).toLowerCase().includes(searchKeywordLowercase) ||
              String(content).toLowerCase().includes(searchKeywordLowercase)
            )
          })
          .map((post) => (
            <a
              key={post.url}
              href={post.url}
              className="md:w-1/2 lg:w-1/3 px-2 flex mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                headerTitle={post.source.name}
                headerSubtitle={dayjs(post.publishedAt).format(
                  'YYYY-MM-DD HH:mm'
                )}
                imageUrl={post.urlToImage}
                title={post.title}
                content={post.content}
              />
            </a>
          ))}
      </div>
      {isFetching && (
        <div className="flex justify-center py-4 absolute inset-x-0 bottom-0">
          <img src={preloadIcon} alt="" className="self-center" />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Home)
