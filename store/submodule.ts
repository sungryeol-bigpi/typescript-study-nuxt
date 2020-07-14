import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'
import { postState } from 'types/postStore'
import getPosts from '~/services/getPosts'

export const state = (): postState => ({
  posts: [],
  page: 1,
})

export const getters = getterTree(state, {
  // fullName: (state) => state.firstName + ' ' + state.lastName,
})

export const mutations = mutationTree(state, {
  setPosts(state, posts) {
    state.posts = posts
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async getPosts({ state, commit }) {
      const res = await getPosts({ page: state.page })
      commit('setPosts', res)
      return res
    },
    // async nuxtServerInit({ dispatch }, { req }) {
    //   await dispatch('getPosts')
    // },
  }
)
