import { createStore } from 'vuex'
import { createQuote, deleteQuote, getAllQuotes, getQuote, updateQuote } from './api'

const store = createStore({
  state: {
    quotes: [],
    quote: {},
    searchText: ''
  },
  mutations: {
    SET_SEARCH(state, text) {
      state.searchText = text
    },
    SET_QUOTES(state, quotes) {
      state.quotes = quotes
    },
    SET_QUOTE(state, quote) {
      state.quote = quote
    },
    ADD_QUOTE(state, quote) {
      state.quotes.push(quote)
    },
    UPDATE_QUOTE(state, updatedQuote) {
      const index = state.quotes.findIndex((quote) => quote.id === updatedQuote.id)
      if (index !== -1) {
        state.quotes.splice(index, 1, updatedQuote)
      }
    },
    REMOVE_QUOTE(state, id) {
      state.quotes = state.quotes.filter((quote) => quote.id !== id)
    }
  },
  actions: {
    async addQuote({ commit }, quote) {
      const response = await createQuote(quote)
      commit('ADD_QUOTE', response)
    },
    async removeQuote({ commit }, id) {
      await deleteQuote(id)
      commit('REMOVE_QUOTE', id)
    },
    async updateQuote({ commit }, data) {
      const response = await updateQuote(data)
      commit('UPDATE_QUOTE', response)
    },
    async getQuote({ commit }, id) {
      const quote = await getQuote(id)
      commit('SET_QUOTE', quote)
    },
    async getQuotesList({ commit }) {
      const quotes = await getAllQuotes()
      commit('SET_QUOTES', quotes)
    }
  },
  getters: {
    filteredQuotes(state) {
      if (!state.searchText) {
        return state.quotes
      }
      const searchText = state.searchText.toLowerCase()
      return state.quotes.filter(
        (quote) =>
          quote.title.toLowerCase().includes(searchText) ||
          quote.author.toLowerCase().includes(searchText)
      )
    }
  }
})

export default store
