import { combineEpics, ofType } from 'redux-observable';
import { filter, map, delay, switchMap } from 'rxjs/operators';
import { REQUEST_ARTICLES, RECEIVE_ARTICLES, receiveArticles } from './actions'
import api from '../services/api'

const newsEpic = action$ => {
  return action$.pipe(
    ofType(REQUEST_ARTICLES),
    switchMap(({ payload }) => {
      return api
        .getArticlesFromDomains(payload)
        .pipe(
          map(({ articles }) => receiveArticles(articles, []))
        )
    })
  )
}

const rootEpic = combineEpics(newsEpic)

export default rootEpic

