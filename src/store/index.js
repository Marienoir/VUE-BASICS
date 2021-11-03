import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    bookItems: [],
    currentId: 0,
    deletedBookItems: []
  },
  getters: {
    getBookItems: state => state.bookItems,
    getCurrentId: state => state.currentId,
    getDeletedBookItems: state => state.deletedBookItems,
    getBooksById: (state) => (id) => {
      return state.bookItems.find(book => book.id === id)
    }
  },
  mutations: {
    updateBookItems: (state, payload) => {
      state.bookItems.push(payload)
    },
    updateCurrentId: (state) => {
      state.currentId += 1
    },
    removeBook: (state, payload) => {
      state.bookItems = state.bookItems.filter(book => book.id !== payload)
    },
    updateDeletedBookItem: (state, payload) => {
      state.deletedBookItems.push(payload)
    },
    removeDeletedBooks: (state, payload) => {
      state.deletedBookItems = state.deletedBookItems.filter(book => book.id !== payload)
    }
  },
  actions: {
    addBookItem(context, payload) {
      const currentId = context.state.currentId
      const data = {
        ...payload,
        id: currentId
      }
      context.commit("updateBookItems", data)
      context.commit("updateCurrentId")
    },
    deleteBookItem(context, payload) {
      const currentBook = context.getters.getBooksById(payload)
      context.commit("removeBook", payload)
      context.commit("updateDeletedBookItem", currentBook)
    },
    restoreBookItem(context, payload) {
      const currentBook = context.state.deletedBookItems.find(book => book.id === payload)
      context.commit("updateBookItems", currentBook)
      context.commit("removeDeletedBooks", payload)
    }
  },
  modules: {},
  plugins: [
    vuexLocal.plugin
  ]
})