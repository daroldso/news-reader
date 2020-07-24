import { REQUEST_ARTICLES, RECEIVE_ARTICLES } from './actions'

function articles(
  state = {
    isFetching: false,
    articles: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ARTICLES:
      return {
        ...state,
        isFetching: false,
        articles: action.articles
      }
    default:
      return state
  }
}

export default articles
