/* eslint-disable */
import * as firestore from '~/plugins/firestore'

export const state = () => ({
  fares: {},
})

export const mutations = {
  setFare(state, { toStation, fare }) {
    state.fares[toStation] = fare
  }
}

export const getters = {
  getFare: state => toStation => {
    const fare = state.fares[toStation]
    console.error('getFare() 1', toStation)
    console.error('getFare() 2', state.fares)
    console.error('getFare() 3', fare)
    return fare
  }
}

export const actions = {
  async fetchFare({ state, commit }, toStation) {
    if (toStation in state.fares) {
      console.error('fetchFare()', toStation, 'is exist')
      console.log('@@@@@', state.fares[toStation])
      return state.fares[toStation]
    }

    let fare = null
    let use_open_data_api = false

    // From fares_with_open_data_api
    const fare_with_open_data_api = await firestore.getDocData('fares_with_open_data_api', toStation)
    if (fare_with_open_data_api !== undefined) {
      const _toStation = fare_with_open_data_api['odpt:toStation'].split('.').slice(0, -1).join('.')
      const _fromStation = fare_with_open_data_api['odpt:fromStation'].split('.').slice(0, -1).join('.')
      if (_toStation === _fromStation) {
        use_open_data_api = true
      }
    }
    console.log('***', fare_with_open_data_api)

    if (use_open_data_api) {
      // Use fares_with_open_data_api
      let rosen = ''
      const _toStation = fare_with_open_data_api['odpt:toStation'].split('.').slice(0, -1).join('.')
      if (_toStation === 'odpt.Station:TokyoMetro.Hanzomon') {
        rosen = '東京メトロ半蔵門線'
      } else if (_toStation === 'odpt.Station:TokyoMetro.Marunouchi') {
        rosen = '東京メトロ丸ノ内線'
      } else if (_toStation === 'odpt.Station:TokyoMetro.Chiyoda.Nijubashimae') {
        rosen = '東京メトロ千代田線'
      } else if (_toStation === 'odpt.Station:TokyoMetro.Hibiya.HigashiGinza') {
        rosen = '東京メトロ日比谷線'
      } else if (_toStation === 'odpt.Station:TokyoMetro.Tozai') {
        rosen = '東京メトロ東西線'
      } else if (_toStation === 'odpt.Station:TokyoMetro.Yurakucho.GinzaItchome') {
        rosen = '東京メトロ銀座線'
      } else if (_toStation === 'odpt.Station:TokyoMetro.Namboku.Komagome') {
        rosen = '東京メトロ南北線'
      }
      fare = {
        rosen: {
          from: '東京',
          icUntin: fare_with_open_data_api['odpt:icCardFare'],
          'rosen': rosen,
          to: toStation
        }
      }
    } else {
      // From fares database
      let count = 0
      while (fare === null && count <= 3) {
        fare = await firestore.getDocData('fares', toStation)
        count++
        console.log('&&&', fare)
      }
    }

    commit('setFare', { toStation, fare })

    return fare
  }
}
/* eslint-enable */
