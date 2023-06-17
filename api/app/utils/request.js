import axios from 'axios'
import urls from './urls.js'

export default {
  request (method, uri, data = null) {
    console.log(uri, data)
    if (!method) {
      return
    }

    if (!uri) {
      return
    }
    var url = urls.pagSeguroProd + uri
    return axios({ method, url, data })
  }
}
