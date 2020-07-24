import api from '../services/api'

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'

function requestArticles(subreddit) {
  return {
    type: REQUEST_ARTICLES
  }
}

function receiveArticles(newArticles, articles) {
  return {
    type: RECEIVE_ARTICLES,
    articles: articles.concat(newArticles)
  }
}

export function fetchArticles(params) {
  return (dispatch, getState) => {
    const { articles } = getState()
    dispatch(requestArticles())
    return api
      .getArticlesFromDomains(params)
      .then((res) => res.data.articles)
      .then((newArticles) => dispatch(receiveArticles(newArticles, articles)))
  }
}
