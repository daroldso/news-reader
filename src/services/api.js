import axios from 'axios'
import { ajax } from 'rxjs/ajax';

const apiKey = '1d7008267692450dbc32db7ee51290e7'

const api = {
  getArticlesFromDomains(params) {
    const { domains = [], page = 1, pageSize = 10 } = params

    return ajax.getJSON(`https://newsapi.org/v2/everything?domains=${domains.toString()}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`)
  }
}

export default api
