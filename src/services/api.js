import axios from 'axios'

const apiKey = '1d7008267692450dbc32db7ee51290e7'

const api = {
  getArticlesFromDomains(params) {
    const { domains = [], page = 1, pageSize = 10 } = params

    return axios.get('https://newsapi.org/v2/everything', {
      params: {
        domains: domains.toString(),
        pageSize,
        page,
        apiKey
      }
    })
  }
}

export default api
