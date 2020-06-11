import Vue from 'vue'
import Vuex from 'vuex'

// import logoStore from './logosStore'
import dataService from '../services/dataService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logos: null,
    links: null
  },
  getters: {
    logos(state) {
      return state.logos;
    },
    links(state) {
      return state.links;
    },
  },
  mutations: {
    setLogos(state, { logos }) {
      state.logos = logos;
    },
    setLinks(state, { links }) {
      state.links = links;
    }
  },
  actions: {
    loadLogos(context) {
      const logos = dataService.getLogos(context);
      console.log('logos in store:', logos)
      context.commit({ type: 'setLogos', logos });
      return logos;
    },
    loadLinks(context) {
      const links = dataService.getLinks(context);
      console.log('links in store:', links)
      context.commit({ type: 'setLinks', links });
      return links;
    }
  },
})
