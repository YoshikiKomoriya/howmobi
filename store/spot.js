/* eslint-disable */
import * as firestore from '~/plugins/firestore'
import * as storage from '~/plugins/cloud-storage'

export const state = () => ({
  spots: [],
})

export const mutations = {
  setSpots(state, spots) {
    state.spots = spots
  }
}

export const getters = {
  getSpotByName: state => name => {
    return state.spots.find(spot => spot.name[0] === name)
  }
}

export const actions = {
  async fetchSpots({ state, commit }) {
    if (state.spots.length > 0) {
      return
    }

    const spots = await firestore.getAll('spots')
    await Promise.all(
      spots.map(async spot => {
        spot.url = await storage.getUrl(spot.imagePath[0])
        // console.log(spot.name)
        // console.log(spot.nameJa[0])
        // console.log(spot.imagePath[0])
        // console.log(spot.url)
      })
    )
    // console.log(spots)
    commit('setSpots', spots)
  }
}
/* eslint-enable */
