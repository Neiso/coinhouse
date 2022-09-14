// Deps
import axios from 'axios'

// Api Key
import Constants from 'expo-constants'
const API_KEY = Constants.manifest.extra.apiKey
const END_POINT = Constants.manifest.extra.apiEndpoint

export async function LookupAddress(address) {
  const module = encodeURIComponent('account')
  const action = encodeURIComponent('txlist')
  const startblock = encodeURIComponent(0)
  const endblock = encodeURIComponent(99999999)
  const page = encodeURIComponent(1)
  const offset = encodeURIComponent(100)
  const addressEncoded = encodeURIComponent(address)
  const apiKey = encodeURIComponent(API_KEY)
  const sort = encodeURIComponent('asc')
  const url = `${END_POINT}?module=${module}&action=${action}&address=${addressEncoded}&apikey=${apiKey}&startblock=${startblock}&endblock=${endblock}&page=${page}&offset=${offset}`

  return axios.get(url)
} 