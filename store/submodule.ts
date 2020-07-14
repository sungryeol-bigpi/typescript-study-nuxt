import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'

export const state = () => ({
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
    // action goes here
  }
)
