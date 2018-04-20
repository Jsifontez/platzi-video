import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/index.js'

import { Map as map} from 'immutable'

// middlewares de redux
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import ReduxThunk from 'redux-thunk' //middleware para manejar acciones asincronas

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

// middlewares en redux

  //ES5 way

// function logger ( {getState, dispatch}) {
//   // return (método para despachar el siguiente middleware) => {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar esta acción', action)
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }

  //ES6 way

// const logger = ({getState, dispatch}) => next => action => {
//   console.log('estado anterior:', getState().toJS())
//   console.log('enviado acción', action)
//   const value = next(action)
//   console.log('nuevo estado:', getState().toJS())
//   return value
// }

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      ReduxThunk
    )
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
