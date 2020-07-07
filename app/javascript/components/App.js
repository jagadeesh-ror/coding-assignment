import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Mappings from './Mappings/Mappings'
import Mapping from './Mapping/Mapping'



const App = () => {
  return(
    <Switch>
      <Route exact path="/" component={Mappings} />
      <Route exact path="/mappings/:id" component={Mapping} />
    </Switch>
  )
}

export default App