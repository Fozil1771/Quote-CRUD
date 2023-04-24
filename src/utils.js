import store from './store'

export const checkIfQuoteExists = (id) => {
  const quotes = store.state.quotes
  return !!quotes.find((quote) => quote.id === Number(id))
}
