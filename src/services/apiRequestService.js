import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://yoursitetorequestAPI.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default class generalApiRequestService {
    getAnewRequest () {
      return instance.get('/moredata');
    }
}