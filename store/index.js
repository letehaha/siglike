import Vuex from 'vuex'

import { notifications } from './modules/notifications.js'
import { links } from './modules/sidebarLinks.js'
import { providers } from './modules/provider.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      store: 'It works!'
    },
    mutations: {

    },
    modules: {
      notifications: notifications,
      sidebarLinks: links,
      providers: providers
    }
  })
}

export default createStore
