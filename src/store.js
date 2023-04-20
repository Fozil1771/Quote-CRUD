import { createStore } from 'vuex'
import { createQuote, deleteQuote, getAllQuotes, updateQuote } from './api'

const store = createStore({
  state: {
    quotes: []
  },
  mutations: {
    GET_QUOTE(state, id) {
      state.selectedQuote = state.quotes.find((quote) => quote.id === id)
    },
    SET_QUOTES(state, quotes) {
      state.quotes = quotes
    },
    ADD_QUOTE(state, quote) {
      state.quotes.push(quote)
    }
  },
  actions: {
    async addQuote({ commit }, quote) {
      const response = await createQuote(quote)
      commit('ADD_QUOTE', response)
    },
    async removeQuote({ commit }, id) {
      const response = await deleteQuote(id)
      commit('REMOVE_QUOTE', response)
    },
    async updateQuote({ commit }, data) {
      const response = await updateQuote(data)
      commit('UPDATE_QUOTE', response)
    },
    async getQuotesList({ commit }) {
      const quotes = await getAllQuotes()
      commit('SET_QUOTES', quotes)
    }
  },
  getters: {
    getQuoteById: (state) => (id) => {
      return state.quotes.find((quote) => quote.id === id)
    }
  }
})

export default store
