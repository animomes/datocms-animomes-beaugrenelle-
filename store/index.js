import { request } from '~/lib/datocms'
import { HOME_PAGE_QUERY } from '@/queries'

export const state = () => ({
  socials: [],
  cover: null
})

export const getters = {
  socials: state => state.socials,
  cover: state => (state.cover ? state.cover.responsiveImage.src : '')
}

export const actions = {
  async fetchHomePage({ commit }) {
    const { homepage } = await request({
      query: HOME_PAGE_QUERY
    })

    commit('setSocials', homepage.socials)
    commit('setCover', homepage.cover)
  }
}

export const mutations = {
  setCover(state, cover) {
    state.cover = cover
  },
  setSocials(state, socials) {
    state.socials = socials
  }
}
