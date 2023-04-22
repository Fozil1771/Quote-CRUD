import { createStore } from 'vuex'
import { createQuote, deleteQuote, getAllQuotes, getQuote, updateQuote } from './api'

const store = createStore({
  state: {
    quotes: JSON.parse(localStorage.getItem('quotes')) || [],
    quote: JSON.parse(localStorage.getItem('quote')) || {},
    searchText: '',
    sortOption: 'newToOld',
    filterAuthors: [],
    filterGenres: []
  },
  mutations: {
    SET_SEARCH(state, text) {
      state.searchText = text
    },
    SET_SORT_OPTION(state, sortOption) {
      state.sortOption = sortOption
    },
    SET_FILTER_AUTHOR(state, filterAuthor) {
      if (!state.filterAuthors.includes(filterAuthor)) {
        state.filterAuthors.push(filterAuthor)
      }
    },
    REMOVE_FILTER_AUTHOR(state, filterAuthor) {
      const index = state.filterAuthors.indexOf(filterAuthor)
      if (index !== -1) {
        state.filterAuthors.splice(index, 1)
      }
    },
    SET_FILTER_GENRE(state, filterGenre) {
      if (!state.filterGenres.includes(filterGenre)) state.filterGenres.push(filterGenre)
    },
    REMOVE_FILTER_GENRE(state, filterGenre) {
      const index = state.filterGenres.indexOf(filterGenre)
      if (index !== -1) {
        state.filterGenres.splice(index, 1)
      }
    },
    SET_QUOTES(state, quotes) {
      state.quotes = quotes
      localStorage.setItem('quotes', JSON.stringify(state.quotes))
    },
    SET_QUOTE(state, quote) {
      state.quote = quote
      localStorage.setItem('quote', JSON.stringify(state.quote))
    },
    ADD_QUOTE(state, quote) {
      state.quotes.push(quote)
      localStorage.setItem('quotes', JSON.stringify(state.quotes))
    },
    UPDATE_QUOTE(state, updatedQuote) {
      const index = state.quotes.findIndex((quote) => quote.id === updatedQuote.id)
      if (index !== -1) {
        state.quotes.splice(index, 1, updatedQuote)
        localStorage.setItem('quotes', JSON.stringify(state.quotes))
      }
    },
    REMOVE_QUOTE(state, id) {
      state.quotes = state.quotes.filter((quote) => quote.id !== id)
      localStorage.setItem('quotes', JSON.stringify(state.quotes))
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
    filteredQuotesBySearch(state) {
      if (!state.searchText) {
        return state.quotes
      }

      const searchText = state.searchText.toLowerCase()
      return state.quotes.filter(
        (quote) =>
          quote.title.toLowerCase().includes(searchText) ||
          quote.author.toLowerCase().includes(searchText)
      )
    },
    sortedQuotes(state, getters) {
      let sortedData =
        state.sortOption == 'oldToNew'
          ? getters.filteredQuotesBySearch.sort(
              (a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)
            )
          : state.sortOption == 'newToOld'
          ? getters.filteredQuotesBySearch.sort(
              (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
            )
          : state.sortOption == 'recentlyUpdated'
          ? getters.filteredQuotesBySearch.sort(
              (a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)
            )
          : getters.filteredQuotesBySearch

      return sortedData
    },
    filteredQuotes(state, getters) {
      // filter by author
      let filteredQuotes = getters.sortedQuotes.filter((quote) => {
        if (state.filterAuthors.length === 0) return true
        return state.filterAuthors.includes(quote.author)
      })

      // filter by genre
      filteredQuotes = filteredQuotes.filter((quote) => {
        if (state.filterGenres.length === 0) return true
        return state.filterGenres.includes(quote.genre)
      })

      return filteredQuotes
    }
  }
})

export default store
