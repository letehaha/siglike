import Vuex from 'vuex'

import { notifications } from './modules/notifications.js'
import { links } from './modules/sidebarLinks.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      store: 'It works!'
    },
    mutations: {

    },
    modules: {
      notifications: notifications,
      sidebarLinks: links
    }
  })
}

export default createStore
