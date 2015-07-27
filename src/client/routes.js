import React from 'react'
import {DefaultRoute, Redirect, NotFoundRoute, Route} from 'react-router'

import App from './components/app'
import HomePage from './pages/home-page'
import StagePage from './pages/stage-page'

export default (
  <Route handler={App}>
    <DefaultRoute handler={HomePage} name="home" />
    <Route handler={StagePage} name="stage" path="/stage" />
  </Route>
)
