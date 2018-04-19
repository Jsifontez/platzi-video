import schema from '../schemas/index.js'
import { fromJS } from 'immutable'

import { SEARCH_ENTITIES } from '../action-types/index'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
})

function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ENTITIES: {
      // forma con immutable de consumir el search

      return state.set('search', action.payload.query)

      // forma sin immutableJS de setar el search

      // action.payload.query
      // let results = []
      // const list = state.data.categories[2].playlist
      // const results = list.filter( (item) => item.author.includes(action.payload.query) )
      // if (action.payload.query){
      //   const list = state.data.categories
      //   const categories = list.map( (category) => {
      //     return category.playlist.filter( item => item.author.toLowerCase().includes(action.payload.query.toLowerCase() ) )
      //   })

      //   results = categories.filter( (arr) => arr.length > 0)
      // }

      // return {
      //   ...state,
      //   search: results
      // }
    }
    default:
      return state
  }
}

export default data