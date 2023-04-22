import axios from 'axios'
import { BASE_URL } from '../constants'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export const getQuote = async (id) => {
  const response = await axios.get(BASE_URL + `/${id}`)
  return response.data
}

export const createQuote = async (data) => {
  const response = await axios.post(BASE_URL, data)
  return response.data
}

export const deleteQuote = async (id) => {
  const response = await axios.delete(BASE_URL + `/${id}`)
  return response.data
}

export const updateQuote = async (data) => {
  const response = await axios.put(BASE_URL + `/${data.id}`, data)
  return response.data
}

export const getAllQuotes = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}
