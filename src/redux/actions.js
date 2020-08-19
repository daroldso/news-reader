import api from '../services/api'

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'

export function requestArticles(params) {
  return {
    type: REQUEST_ARTICLES,
    payload: {
      ...params
    }
  }
}

export function receiveArticles(articles) {
  return {
    type: RECEIVE_ARTICLES,
    articles
  }
}

// For redux thunk
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
