import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import VideoScreen from './Screens/VideoScreen'
import PlayVideo from './Screens/PlayVideo'

export default function App() {
  return(
  <Router>
    <Switch>
      <Route exact path="/">
        <VideoScreen />
      </Route>
      <Route path="/video">
        <PlayVideo />
      </Route>
    </Switch>
  </Router>
  )
}