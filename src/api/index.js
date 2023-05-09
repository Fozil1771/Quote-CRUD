import axios from 'axios'
import { BASE_URL } from '../constants'

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export const getQuote = async (id) => {
  const response = await axios.get(BASE_URL + `/${id}`, config)
  return response.data
}

export const createQuote = async (data) => {
  const response = await axios.post(BASE_URL, data)
  return response.data
}

export const deleteQuote = async (id) => {
  const response = await axios.delete(BASE_URL + `/${id}`, config)
  return response.data
}

export const updateQuote = async (data) => {
  const response = await axios.put(BASE_URL + `/${data.id}`, data, config)
  return response.data
}

export const getAllQuotes = async () => {
  const response = await axios.get(BASE_URL, config)
  return response.data
}
