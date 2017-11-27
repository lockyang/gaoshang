import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const myPlugin = (store) => {
  store.subscribe((mutation, state) => {
    console.log(mutation)
  })
}

const store = new Vuex.Store({
  modules: {},
  plugins: [myPlugin]
})

export default store
// export default function createStore () {
//   return new Vuex.Store({
//     modules: {},
//     plugins: [myPlugin]
//   })
// }
