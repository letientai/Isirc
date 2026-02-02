import { useState } from 'react'
import IsircConference from './pages/IsircConference'
import UseRouteElements from './pages/routes'

function App() {
  const routeElements = UseRouteElements()

  return <>{routeElements}</>
}

export default App
