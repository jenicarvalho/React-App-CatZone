import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/search?api_key=1cfd7fae-7871-4788-b31d-e4c1ead8ae86'
})

export default api