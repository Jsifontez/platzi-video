import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
// import Categories from './src/playlist/components/categories'
// import data from '../api.json'
// import data from '../schemas/index.js'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index.js'

import { Map as map} from 'immutable'

// console.log(data)

// const initialState = {
//   data: {
//     // ...data,
//     entities: data.entities,
//     categories: data.result.categories
//     search: [],
//   },
//   modal: {
//     visibility: false,
//     mediaId: null,
//   }
// }

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState())

const homeContainer = document.getElementById('home-container')

// ReactDOM.render( que voy a renderizar, dónde lo haré)
// en los que que voy a renderizar significa un componente
// y el dónde es un elemento del DOM que ya exista



render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  homeContainer
)
