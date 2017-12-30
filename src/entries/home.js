import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
// import Categories from './src/playlist/components/categories'
import data from '../api.json'

const homeContainer = document.getElementById('home-container')

// ReactDOM.render( que voy a renderizar, dónde lo haré)
// en los que que voy a renderizar significa un componente
// y el dónde es un elemento del DOM que ya exista

render( <Home data={data}/>, homeContainer)
