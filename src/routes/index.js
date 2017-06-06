import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'

let createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
    >

    </Route>
  )
}

let Routes = createRoutes()

export default Routes
